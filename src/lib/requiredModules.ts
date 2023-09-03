import { webpack } from "replugged";
import * as Types from "../types";
export const GuildMemberCountStore =
  webpack.getByStoreName<Types.GuildMemberCountStore>("GuildMemberCountStore");
export const GuildPopoutStore = webpack.getByStoreName<Types.GuildPopoutStore>("GuildPopoutStore");
export const PresenceClasses = webpack.getByProps<Types.PresenceClasses>(["status", "guildIcon"]);
export const GuildTooltip = webpack.getBySource<Types.GenericModule>(
  ".Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED",
);
export const FetchGuildPopout = webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
  webpack.getBySource(".GUILD_PREVIEW("),
  ".apply(this",
);
