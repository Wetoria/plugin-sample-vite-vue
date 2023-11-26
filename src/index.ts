import {
  Plugin,
  Menu,
  getFrontend,
} from "siyuan";
import "@/index.scss";
import { addDemoTopBarIcon } from './modules/Demo';

let plugin = null
export function usePlugin(pluginProps?) {
  if (pluginProps) {
    plugin = pluginProps
  }
  if (!plugin && !pluginProps) {
    console.error('need bind plugin')
  }
  return plugin;
}

export default class PluginSample extends Plugin {
  private isMobile: boolean;

  async onload() {
    const frontEnd = getFrontend();
    this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";

    usePlugin(this);
    addDemoTopBarIcon()
  }
}
