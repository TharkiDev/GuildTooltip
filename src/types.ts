import { types as DefaultTypes } from "replugged";
import type { Guild } from "discord-types/general";
import type { Store } from "replugged/dist/renderer/modules/common/flux";
export { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass } from "react";
export type { Guild } from "discord-types/general";

export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}

export interface GuildMemberCountStore extends Store {
  getMemberCount: (guildId: string) => number;
  getMemberCounts: () => Record<string, number>;
  getOnlineCount: (guildId: string) => number;
}

export interface GuildPopoutStore extends Store {
  getGuild: (id: string) => Guild & {
    presenceCount: number | null;
    memberCount: number | null;
  };
  isFetchingGuild: (id: string) => boolean;
  hasFetchFailed: (id: string) => boolean;
}

export interface PresenceClasses {
  applicationIcon: string;
  button: string;
  buttonForNonMember: string;
  buttonSize: string;
  channel: string;
  channelIcon: string;
  channelName: string;
  content: string;
  count: string;
  cursorDefault: string;
  guildBadge: string;
  guildDetail: string;
  guildIcon: string;
  guildIconExpired: string;
  guildIconImage: string;
  guildIconImageJoined: string;
  guildIconJoined: string;
  guildInfo: string;
  guildName: string;
  guildNameWrapper: string;
  header: string;
  inviteDestination: string;
  inviteDestinationExpired: string;
  inviteDestinationJoined: string;
  inviteSplash: string;
  inviteSplashBadge: string;
  inviteSplashImage: string;
  inviteSplashImageLoaded: string;
  resolving: string;
  resolvingBackground: string;
  resolvingBackgroundWidth: string;
  resolvingFakeButton: string;
  resolvingWrapper: string;
  status: string;
  statusCounts: string;
  statusOffline: string;
  statusOnline: string;
  statusWrapper: string;
  userSelectNone: string;
  wrapper: string;
}

export interface Settings {
  onlineCount: boolean;
  allCount: boolean;
}
