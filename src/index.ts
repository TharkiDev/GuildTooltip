import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("GuildTooltip");
export const SettingValues = await settings.init("dev.tharki.GuildTooltip", defaultSettings);

import { applyInjections } from "./patches";

export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings.jsx";
