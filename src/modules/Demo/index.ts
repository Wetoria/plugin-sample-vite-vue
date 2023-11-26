import { usePlugin } from '@/index';
import { getDomByVueComponent } from '@/utils';
import { Menu } from 'siyuan';
import componentVue from './component.vue';

export function addDemoTopBarIcon() {
  const plugin = usePlugin();

  const topBarElement = plugin.addTopBar({
    icon: "iconSuper",
    title: plugin.i18n.addTopBarIcon,
    position: "right",
    callback: () => {
      if (plugin.isMobile) {
        addMenu();
      } else {
        let rect = topBarElement.getBoundingClientRect();
        // 如果被隐藏，则使用更多按钮
        if (rect.width === 0) {
          rect = document.querySelector("#barMore").getBoundingClientRect();
        }
        if (rect.width === 0) {
          rect = document
            .querySelector("#barPlugins")
            .getBoundingClientRect();
        }
        addMenu(rect);
      }
    },
  })
}



function addMenu(rect?: DOMRect) {
  const plugin = usePlugin();
  const menu = new Menu("pluginSampleViteVueDemoMenu");
  menu.addItem({
    element: getDomByVueComponent(componentVue)
  });
  if (plugin.isMobile) {
    menu.fullscreen();
  } else {
    menu.open({
      x: rect.right,
      y: rect.bottom,
      isLeft: true,
    });
  }
}
