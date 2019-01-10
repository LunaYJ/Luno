# Luno, A Ghost Theme for Ghost2.0


## 总览

`Luno` Fork 自 [onevcat 的 vno](https://github.com/onevcat/vno)

由于vno 已弃用，并不支持Ghost2.0，所以我在vno的基础上进行了一些样式和动效的修改，并且支持了Ghost2.0


### Disqus 评论系统和 Font Awesome 字体

如果您打算使用 [Disqus](https://disqus.com) 的话，集成评论系统就只是填一个用户名那么简单。您也可以使用 [Font Awesome](http://fontawesome.io) 的图标字体来获得更好的表现。这些不仅对于个人站点 (比如博客) 来说是很好的选择，对于一些商用的 CMS (内容管理系统) 来说也是不错的解决方案。


### 代码高亮

使用了 [highlight.js](http://highlightjs.org) 作为主题的代码高亮引擎。您可以在您的技术博客上以简洁优美的形式呈现您的代码。


### 封面

#### 图片和颜色

将您的封面图片放到主题的 `assets/images/` 下，替换掉原来的 `background-cover.jpg` 文件即可（您也可以在博客的设定页面中进行更改）。您也可以改变封面的颜色。找到 `partials/side-panel.hbs` 文件，将 `<div class="panel-cover--overlay cover-blue"></div>` 中的 `cover-orange` 替换成您需要的颜色即可。默认为您提供了七种选择：

* `cover-blue` - #2568A3
* `cover-green` - #156F78
* `cover-purple` - #493252
* `cover-red` - #E25440
* `cover-orange` - #FB9C50
* `cover-slate` - #3D4260
* `cover-disabled` - 透明

#### 头像和简介

头像直接使用了您的博客的 logo。在博客的设定页面中可以进行更改。

您还可以在封面页上写一个简短的介绍。只要您瞄一眼 `partials/side-panel.hbs` 应该就知道怎么做了 :)

#### 导航按钮

也在 `partials/side-panel.hbs` 文件中定义。不要忘了把它们换成您自己的链接。您不应该更改或者至少保留 `/#blog` 链接，因为这个链接将触发一个转场到您的博客主页面的动画。

#### 社交按钮

可以在 `partials/social.hbs` 中按照例子将社交网络的按钮替换成您需要的链接和图标。图标都来自 Font Awesome，您可以访问它们的[网站](http://fontawesome.io/icons/)来查看您能使用的所有图标。

### Disqus

为了使用 Disqus 的评论系统，您需要从 Disqus 获取您自己的 `short name`。将其添加到 `comments.hbs` 的 `disqus_shortname` 中就可以了。然后您还需要将 `post.hbs` 中的 `{{!-- {{> comments}} --}}` 替换为 `{{> comments}}` 来使 Disqus 生效。

## 开发

为了简单地对主题进行修改和开发，您需要安装 sass 编译器以及 bourbon。如果您在本地有 ghost 环境的话，这些应该已经安装好了，因为 ghost 运行是需要这些部件的。

您可以在终端中进行一些检查，来看看是否已经安装完成。如果没有问题的话，您应该可以在命令行后看到对应的工具的版本号。

### SASS

```bash
sass -v
> Sass 3.3.6 (Maptastic Maple)
```

如果 SASS 没有能正确安装的话，请参见 [Sass 安装页面](http://sass-lang.com/install)进行安装。

### Bourbon

```bash
bourbon version
> Bourbon 4.0.1
```

如果 Bourbon 没有能正确安装的话，请参见 [Bourbon 的网站](http://bourbon.io)进行安装。

### 开始开发

验证安装后就可以开始开发了。首先我们要将 bourbon 加载到 `scss` 文件夹里。

在主题文件夹下执行 `bourbon install` 来加载 bourbon：

```bash
bourbon install --path assets/scss
> bourbon files installed to assets/scss/bourbon/
//Or "Bourbon files already installed, doing nothing." if you already installed it.
```

然后就可以使用 sass 的命令行工具来监视文件夹中的 scss 文件的改动，并自动重新编译了。

```bash
pwd
> In the vno theme root folder: {blog_path}/content/themes/vno

sass --watch assets/scss/vno.scss:assets/css/vno.css
>>>> Sass is watching for changes. Press Ctrl-C to stop.
```

现在，任何对于 scss 文件的改动都将自动反映到最终的 `/css/vno.css` 文件中了。

### OSX Maverick

有些人在运行 `sass --watch` 时可能会遇到如下错误：

```bash
> LoadError: cannot load such file -- rb-fsevent
  Use --trace for backtrace.
```

这是一个 Sass 在 OSX Maverick 下的[已知问题](http://stackoverflow.com/questions/22413834/getting-error-when-using-command-line-for-sass-to-watch-files)，新版本中应该已经修复。请尝试将 Sass 升级到最新版本，或者安装 `rb-fsevent` 这个gem：

```bash
gem install rb-fsevent
```

### 祝你好运

玩得开心，请记得给我反馈。如果您发现了什么 bug，请直接指出，如果还能附带一个 pull request 修正的话，那真的感激万分！

如果您觉得这个主题还不错的话，欢迎加颗星星或者 follow 我一下以示支持，这将对我和我的项目的发展提供不可估量的帮助。再次感谢。

## 许可

非常感谢 [Dale Anthony](https://github.com/daleanthony) 和他的 [Uno](https://github.com/daleanthony/uno) 以及 [noevcat](https://github.com/onevcat) 和他的 [Vno](https://github.com/onevcat/vno)。Luno 是一个基于 Uno / Vno 的主题。

Luno 遵循 Uno 的要求按照 [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/) 进行授权。点击上面的链接可以了解到更多信息。
