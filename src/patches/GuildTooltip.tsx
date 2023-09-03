import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { GuildTooltip } from "../lib/requiredModules";
import MemberCount from "../Components/MemberCount";
import * as Types from "../types";
export const patchGuildTooltip = () => {
  const fnKey = webpack.getFunctionKeyBySource(GuildTooltip, "includeActivity:");
  PluginInjector.after(
    GuildTooltip,
    fnKey,
    ([{ guild }]: [{ guild: Types.Guild }], res: Types.ReactElement) => {
      if (!Array.isArray(res.props.text)) {
        res.props.text = [res.props.text];
      }
      res.props.text?.push(
        <MemberCount
          {...{
            guild,
          }}
        />,
      );
      return res;
    },
  );
};
