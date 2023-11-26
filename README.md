
# 使用 vite + vue 的思源笔记插件示例

No time to update all infos. If u wanna chat with me, see [开发经验分享 & 联系作者](#使用技巧开发经验分享联系作者).

没时间更新所有内容，如果你想跟我交流，参考 [开发经验分享 & 联系作者](#使用技巧开发经验分享联系作者)。

---

> 本例同 [siyuan/plugin-sample](https://github.com/siyuan-note/plugin-sample) [v0.2.8](https://github.com/siyuan-note/plugin-sample/tree/v0.2.8)


## 特点

1. 使用 vite 打包
2. 支持使用符号链接，而不是把项目放到插件目录下的模式进行开发
3. 内置对 vue 框架的支持
4. 提供一个github action 模板，能自动生成package.zip并上传到新版本中

## 如何使用

1. 通过 <kbd>Use this template</kbd> 创建你自己的插件仓库。
2. 克隆代码至本地任意文件夹内。
    * **注意: 不需要把代码放到 `{workspace}/data/plugins/` 下。**
3. 使用 `pnpm i` 安装所需依赖。

### 注入插件至思源笔记
3. **自动创建符号链接**
    - 打开思源笔记, 确保思源内核正在运行
    - 运行 `pnpm run make-link`, 脚本会自动检测所有思源的工作空间, 请在命令行中手动输入序号以选择工作空间
        ```bash
        >>> pnpm run make-link
        > plugin-sample-vite-svelte@0.0.3 make-link H:\SrcCode\开源项目\plugin-sample-vite-svelte
        > node  --no-warnings ./scripts/make_dev_link.js

        "targetDir" is empty, try to get SiYuan directory automatically....
        Got 2 SiYuan workspaces
        [0] H:\Media\SiYuan
        [1] H:\临时文件夹\SiYuanDevSpace
        Please select a workspace[0-1]: 0
        Got target directory: H:\Media\SiYuan/data/plugins
        Done! Created symlink H:\Media\SiYuan/data/plugins/plugin-sample-vite-svelte
        ```
4. **手动创建符号链接**
    - 打开 `./scripts/make_dev_link.js` 文件，更改 `targetDir` 为思源的插件目录 `<siyuan workspace>/data/plugins`
    - 运行 `pnpm run make-link` 命令, 如果看到类似以下的消息，说明创建成功:
      ```bash
      ❯❯❯ pnpm run make-link
      > plugin-sample-vite-svelte@0.0.1 make-link H:\SrcCode\plugin-sample-vite-svelte
      > node ./scripts/make_dev_link.js

      Done! Created symlink H:/SiYuanDevSpace/data/plugins/plugin-sample-vite-svelte
      ```
5. **设置环境变量创建符号链接**
    - 你也可以设置系统的环境变量 `SIYUAN_PLUGIN_DIR` 为 `/data/plugins` 的路径
6. 执行 `pnpm run dev` 进行实时编译
7. 在思源中打开集市并在下载选项卡中启用插件


> 注意由于使用的 make-link 脚本依赖于 `fetch`，所以如果想要使用 make-link **请保证至少安装 v18 版本的 nodejs**


## 国际化

参考：[plugin-sample 国际化](https://github.com/siyuan-note/plugin-sample/blob/main/README_zh_CN.md#%E5%9B%BD%E9%99%85%E5%8C%96)


> 国际化方面我们主要考虑的是支持多语言，具体需要完成以下工作：
> 
> * 插件自身的元信息，比如插件描述和自述文件
>   * plugin.json 中的 `description` 和 `readme` 字段，以及对应的 README*.md 文件
> * 插件中使用的文本，比如按钮文字和提示信息
>   * src/i18n/*.json 语言配置文件
>   * 代码中使用 `this.i18.key` 获取文本
> * 最后在 plugin.json 中的 `i18n` 字段中声明该插件支持的语言
> 
> 建议插件至少支持英文和简体中文，这样可以方便更多人使用。

## plugin.json

不赘述。参考：[plugin-sample plugin.json](https://github.com/siyuan-note/plugin-sample/blob/main/README_zh_CN.md#pluginjson)。

## 打包、上架集市、GitHub Action


目前我开发插件不涉及上架，所以这一块参考：[plugin-sample-vite-svelte 打包](https://github.com/siyuan-note/plugin-sample-vite-svelte/blob/main/README_zh_CN.md#%E6%89%93%E5%8C%85)。


## 使用技巧&开发经验分享&联系作者

有关于思源笔记插件的开发经验，我会写在这里：[思源笔记插件开发经验](https://simplest-frontend.feishu.cn/wiki/MhtDwo9EnimFTtkvSlqcSCHDnbd)

如果有什么想要交流的，直接在文档中评论就行，看到了我会第一时间回复。

## 鸣谢

- [plugin-sample-vite-svelte](https://github.com/siyuan-note/plugin-sample-vite-svelte)
