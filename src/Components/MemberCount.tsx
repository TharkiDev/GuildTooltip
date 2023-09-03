import { common, components } from "replugged";
import {
  GuildMemberCountStore,
  GuildPopoutStore,
  PresenceClasses,
  FetchGuildPopout,
} from "../lib/requiredModules";
import * as Types from "../types";

const { React, flux: Flux } = common;
const { Flex } = components;

const lastFetchedMap = new Map<string, number>();

export default React.memo(({ guild }: { guild: Types.Guild }) => {
  const { memberCount, presenceCount } = Flux.useStateFromStores(
    [GuildMemberCountStore, GuildPopoutStore],
    () => {
      const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
      const popoutGuild = GuildPopoutStore.getGuild(guild.id);
      const isFetching = GuildPopoutStore.isFetchingGuild(guild.id);
      if (popoutGuild && !lastFetchedMap.get(guild.id)) {
        lastFetchedMap.set(guild.id, Date.now());
      }
      const lastFetched = lastFetchedMap.get(guild.id);
      const isExpired = !lastFetched || Date.now() - lastFetched > 1000 * 60 * 3;
      if ((!popoutGuild || isExpired) && !isFetching) {
        FetchGuildPopout(guild.id);
        lastFetchedMap.set(guild.id, Date.now());
      }
      return {
        memberCount: memberCount || popoutGuild?.memberCount,
        presenceCount: popoutGuild?.presenceCount || 0,
      };
    },
  );

  return (
    <Flex
      {...{
        direction: Flex.Direction.HORIZONTAL,
        align: Flex.Align.START,
        justify: Flex.Justify.CENTER,
        style: {
          marginTop: "6px",
          gap: "6px",
        },
      }}>
      <div
        {...{
          className: PresenceClasses.statusWrapper,
          key: presenceCount,
        }}>
        <i {...{ className: `${PresenceClasses.statusOnline} ${PresenceClasses.status}` }} />
        <span {...{ className: PresenceClasses.count }}>{presenceCount || "0"}</span>
      </div>
      <div {...{ className: PresenceClasses.statusWrapper, key: memberCount }}>
        <i {...{ className: `${PresenceClasses.statusOffline} ${PresenceClasses.status}` }} />
        <span {...{ className: PresenceClasses.count }}>{memberCount || "0"}</span>
      </div>
    </Flex>
  );
});
