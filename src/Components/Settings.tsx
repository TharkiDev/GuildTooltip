import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
const { SwitchItem } = components;
import * as Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): Types.ReactElement => {
  return (
    <div>
      <SwitchItem
        {...{
          note: "Shows online member count in tooltip.",
          ...util.useSetting(SettingValues, "onlineCount", defaultSettings.onlineCount),
        }}>
        Online Count
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Shows all member count in tooltip.",
          ...util.useSetting(SettingValues, "allCount", defaultSettings.allCount),
        }}>
        Member Count
      </SwitchItem>
    </div>
  );
};
