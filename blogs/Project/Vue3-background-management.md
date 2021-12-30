---
title: Vue3.x后台管理模板
date: 2021-12-27
tags:
  - Vue
categories:
  - 项目
---
## 开篇
基于 Vue 3 最新语法标准，后台前端综合解决方案。
### vue 的最新变化
自从 `vue` 在 `2020年09月18日` 发布了 `3.0` 的版本之后，很多开发者都开始尝试被大受推崇的 `Composition API`。在企业中 `Composition API` 却并没有被大范围的普及，很多的公司虽然升级到了` vue 3` ，但却依然使用着 `options API` 语法。
```vue
<template>
  <h1>{{ count }}</h1>
  <button @click="inc">++</button>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // 创建响应数据 count
    const count = ref(0);
    // 创建修改数据的方法 inc
    const inc = () => {
      count.value++;
    };
    // return 一个对象用于在tempate 中使用
    return {
      // 想要在 tempalte 中使用 count,则必须return出去
      count,
      // 想要在 tempalte 中使用 inc,则必须return出去
      inc,
    };
  },
});
</script>
```
想要在 template 中使用一个 `响应式数据`，不但要通过 `ref` 进行声明，还需要在` setup `函数中进行` return `操作。同样方法也是如此。那么当我们的一个项目足够复杂时，这样的一种结构形式就会变得 `非常的难看` 并且 `难以维护`。

在 `2021年8月5日` ，伴随着 `vue 3.2` 的发布，`vue` 正式推出了全新的 `composition API` 语法标准 `script-setup`,`script-setup` 的推出，标记着 `setup` 函数式语法 正式称为过去式！
```vue
<template>
  <h1>{{ count }}</h1>
  <button @click="inc">++</button>
</template>
<script setup>
import { ref } from "vue";
// 创建响应数据 count
const count = ref(0);
// 创建修改数据的方法 inc
const inc = () => {
  count.value++;
};
</script>
```
## 标准化大厂编程规范解决方案之ESLint + Git Hooks
### 为什么需要编程规范？
**工欲善其事，必先利其器**,**一个项目无法具备统一的编程规范，导致项目的代码像多个不同材质的补丁拼接起来一样**。
如何自动化的对代码进行规范，其中主要包括：
1. 编码规范
2. git 规范
### 大厂编程规范一：代码检测工具 ESLint 
在我们去创建项目的时候，脚手架工具已经帮助我们安装了 ESLint 代码检测工具。对于 ESLint 的大名，同学们或多或少的应该都听说过，只不过有些同学可能了解的多一些，有些同学了解的少一些。

在咱们当前的项目中，包含一个 `.eslintrc.js` 文件，这个文件就是 `eslint` 的配置文件。随着大家对代码格式的规范性越来越重视，`eslint` 也逐渐被更多的人所接收，同时也有很多大厂在原有的 `eslint` 规则基础之上进行了一些延伸。

我们在创建项目时，就进行过这样的选择：
```js
? Pick a linter / formatter config: 
  ESLint with error prevention only // 仅包含错误的 ESLint
  ESLint + Airbnb config // Airbnb 的 ESLint 延伸规则
  ESLint + Standard config // 标准的 ESLint 规则
```
打开项目中的 .eslintrc.js 文件
```js
// ESLint 配置文件遵循 commonJS 的导出规则，所导出的对象就是 ESLint 的配置对象
// 文档：https://eslint.bootcss.com/docs/user-guide/configuring
module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  // env 表示启用 ESLint 检测的环境
  env: {
    // 在 node 环境下启动 ESLint 检测
    node: true
  },
  // ESLint 中基础配置需要继承的配置
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  // 解析器
  parserOptions: {
    parser: "babel-eslint"
  },
  // 需要修改的启用规则及其各自的错误级别
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
```
那么想要解决ESLint错误，通常情况下我们有两种方式：
- 按照 ESLint 的要求修改代码
- 修改 ESLint 的验证规则
### 大厂编程规范二：代码格式化 Prettier
ESLint 可以让我们的代码格式变得更加规范，但是同样的它也会带来开发时编码复杂度上升的问题。
那么有没有办法既可以保证 ESLint 规则校验，又可以让开发者无需关注格式问题来进行顺畅的开发呢？而解决这个问题的关键就是 prettier！

`prettier` 是什么？
- 一个代码格式化工具
- 开箱即用
- 可以直接集成到 VSCode 之中
- 在保存时，让代码直接符合 ESLint 标准（需要通过一些简单配置）
### ESLint 与 Prettier 配合解决代码格式问题
在项目中新建 `.prettierrc` 文件，该文件为 `perttier` 默认配置文件。
```json
{
 // 不尾随分号
 "semi": false,
 // 使用单引号
 "singleQuote": true,
 // 多行逗号分割的语法中，最后一行不加逗号
 "trailingComma": "none"
}
```
整个的 perttier 和 ESLint 的配合使用就算是全部完成了。在之后我们写代码的过程中，只需要保存代码，那么 perttier 就会帮助我们自动格式化代码，使其符合 ESLint 的校验规则。而无需我们手动进行更改了。
### 大厂编程规范三：约定式提交规范
在前面我们通过 `prettier + ESLint` 解决了代码格式的问题，但是我们之前也说过 **编程规范** 指的可不仅仅只是 **代码格式规范** 。

除了 **代码格式规范** 之外，还有另外一个很重要的规范就是 **`git` 提交规范！**

在现在的项目开发中，通常情况下，我们都会通过 `git` 来管理项目。只要通过 `git` 来管理项目，那么就必然会遇到使用 `git` 提交代码的场景

当我们执行 `git commit -m "描述信息"` 的时候，我们知道此时必须添加一个描述信息。但是中华文化博大精深，不同的人去填写描述信息的时候，都会根据自己的理解来进行描述。

而很多人的描述 “天马行空” ，这样就会导致别人在看你的提交记录时，看不懂你说的什么意思？不知道你当前的这次提交到底做了什么事情？会不会存在潜在的风险？

对于 **`git` 提交规范** 来说，不同的团队可能会有不同的标准，那么咱们今天就以目前使用较多的 [Angular团队规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) 延伸出的 [Conventional Commits specification（约定式提交）](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 为例，来为大家详解  **`git` 提交规范**
约定式提交规范要求如下：
```js
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
--------  翻译 -------------
<类型>[可选 范围]: <描述>
[可选 正文]
[可选 脚注]
```
也就是说，如果要按照 **约定式提交规范** 来去做的规范化，我想大家看到这样的一个提交描述之后，心里的感觉应该和我一样是崩溃的！要是每次都这么写，写到猴年马月了！
### Commitizen助你规范化提交代码
经过了很多人的冥思苦想，就出现了一种叫做 **git 提交规范化工具** 的东西，而我们要学习的 `commitizen` 就是其中的佼佼者！

`commitizen` 仓库名为 [cz-cli](https://github.com/commitizen/cz-cli) ，它提供了一个 `git cz` 的指令用于代替 `git commit`，简单一句话介绍它：

> 当你使用 `commitizen` 进行代码提交（git commit）时，`commitizen` 会提交你在提交时填写所有必需的提交字段！
下面我们就来安装并且使用一下 `commitizen` ，使用完成之后你自然就明白了这句话的意思！
1. 全局安装`Commitizen`

   ```js
   npm install -g commitizen@4.2.4
   ```
2. 安装并配置 `cz-customizable` 插件
   1. 使用 `npm` 下载 `cz-customizable`

      ```node
      npm i cz-customizable@6.3.0 --save-dev
      ```

   2. 添加以下配置到 `package.json ` 中

      ```json
      ...
        "config": {
          "commitizen": {
            "path": "node_modules/cz-customizable"
          }
        }
      ```
3. 项目根目录下创建 `.cz-config.js` 自定义提示文件
   ```js
   module.exports = {
     // 可选类型
     types: [
       { value: 'feat', name: 'feat:     新功能' },
       { value: 'fix', name: 'fix:      修复' },
       { value: 'docs', name: 'docs:     文档变更' },
       { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
       {
         value: 'refactor',
         name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
       },
       { value: 'perf', name: 'perf:     性能优化' },
       { value: 'test', name: 'test:     增加测试' },
       { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
       { value: 'revert', name: 'revert:   回退' },
       { value: 'build', name: 'build:    打包' }
     ],
     // 消息步骤
     messages: {
       type: '请选择提交类型:',
       customScope: '请输入修改范围(可选):',
       subject: '请简要描述提交(必填):',
       body: '请输入详细描述(可选):',
       footer: '请输入要关闭的issue(可选):',
       confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
     },
     // 跳过问题
     skipQuestions: ['body', 'footer'],
     // subject文字长度默认是72
     subjectLimit: 72
   }
   ```
4. 使用 `git cz` 代替 `git commit`
   使用 `git cz` 代替 `git commit`，即可看到提示内容
那么到这里我们就已经可以使用`git cz` 来代替了 `git commit` 实现了规范化的提交诉求了，但是当前依然存在着一个问题，那就是我们必须要通过 `git cz` 指令才可以完成规范化提交！它们忘记了使用 `git cz` 指令，直接就提交了怎么办呢？
###  Git Hooks
使用了 git cz 来代替了 git commit 实现了规范化的提交诉求，但是依然存在着有人会忘记使用的问题。`Git hooks（git 钩子 || git 回调方法）` 。也就是：**`git` 在执行某个事件之前或之后进行一些其他额外的操作**，而我们所期望的 **阻止不合规的提交消息**，那么就需要使用到 `hooks` 的钩子函数。


| Git Hook      | 调用时机                                    | 说明                                               |
| :------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| pre-applypatch           | `git am`执行前                                               |                                                              |
| applypatch-msg        | `git am`执行前                                               |                                                              |
| post-applypatch       | `git am`执行后                                               | 不影响`git am`的结果                                         |
| **pre-commit**        | `git commit`执行前                                           | 可以用`git commit --no-verify`绕过                           |
| **commit-msg**        | `git commit`执行前                                           | 可以用`git commit --no-verify`绕过                           |
| post-commit           | `git commit`执行后                                           | 不影响`git commit`的结果                                     |
| pre-merge-commit      | `git merge`执行前                                            | 可以用`git merge --no-verify`绕过。                          |
| prepare-commit-msg    | `git commit`执行后，编辑器打开之前                           |                                                              |
| pre-rebase            | `git rebase`执行前                                           ||
| post-checkout   | `git checkout`或`git switch`执行后                           | 如果不使用`--no-checkout`参数，则在`git clone`之后也会执行。 |
| post-merge            | `git commit`执行后                                           | 在执行`git pull`时也会被调用                                 |
| pre-push              | `git push`执行前                                             |                                                              |
| pre-receive           | `git-receive-pack`执行前                                     |                                                              |
| update                |                                                              |                                                              |
| post-receive          | `git-receive-pack`执行后                                     | 不影响`git-receive-pack`的结果                               |
| post-update           | 当 `git-receive-pack`对 `git push` 作出反应并更新仓库中的引用时 |                                                              |
| push-to-checkout      | 当``git-receive-pack`对`git push`做出反应并更新仓库中的引用时，以及当推送试图更新当前被签出的分支且`receive.denyCurrentBranch`配置被设置为`updateInstead`时 |                                                              |
| pre-auto-gc           | `git gc --auto`执行前                                        |                                                              |
| post-rewrite          | 执行`git commit --amend`或`git rebase`时                     |                                                              |
| sendemail-validate    | `git send-email`执行前                                       |                                                              |
| fsmonitor-watchman    | 配置`core.fsmonitor`被设置为`.git/hooks/fsmonitor-watchman`或`.git/hooks/fsmonitor-watchmanv2`时 |                                                              |
| p4-pre-submit         | `git-p4 submit`执行前                                        | 可以用`git-p4 submit --no-verify`绕过                        |
| p4-prepare-changelist | `git-p4 submit`执行后，编辑器启动前                          | 可以用`git-p4 submit --no-verify`绕过                        |
| p4-changelist         | `git-p4 submit`执行并编辑完`changelist message`后            | 可以用`git-p4 submit --no-verify`绕过                        |
| p4-post-changelist    | `git-p4 submit`执行后                                        |                                                              |
| post-index-change     | 索引被写入到`read-cache.c do_write_locked_index`后           |                                       |

PS：详细的 `HOOKS介绍` 可点击[这里](https://git-scm.com/docs/githooks)查看。整体的 `hooks` 非常多，当时我们其中用的比较多的其实只有两个：

| Git Hook       | 调用时机                                                     | 说明                               |
| :------------- | ------------------------------------------------------------ | ---------------------------------- |
| **pre-commit** | `git commit`执行前<br />它不接受任何参数，并且在获取提交日志消息并进行提交之前被调用。脚本`git commit`以非零状态退出会导致命令在创建提交之前中止。 | 可以用`git commit --no-verify`绕过 |
| **commit-msg** | `git commit`执行前<br />可用于将消息规范化为某种项目标准格式。<br />还可用于在检查消息文件后拒绝提交。 | 可以用`git commit --no-verify`绕过 |

简单来说这两个钩子：

1. `commit-msg`：可以用来规范化标准格式，并且可以按需指定是否要拒绝本次提交
2. `pre-commit`：会在提交前被调用，并且可以按需指定是否要拒绝本次提交

### 使用 husky + commitlint 检查提交描述是否符合规范要求
1. [commitlint](https://github.com/conventional-changelog/commitlint)：用于检查提交信息
2. [husky](https://github.com/typicode/husky)：是`git hooks`工具
注意：**`npm` 需要在 7.x 以上版本！！！！！**
#### commitlint
1. 安装依赖：

   ```
   npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
   ```

2. 创建 `commitlint.config.js` 文件

   ```
   echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
   ```

3. 打开 `commitlint.config.js` ， 增加配置项（ [config-conventional 默认配置点击可查看](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js) ）：

   ```js
   module.exports = {
     // 继承的规则
     extends: ['@commitlint/config-conventional'],
     // 定义规则类型
     rules: {
       // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
       'type-enum': [
         2,
         'always',
         [
           'feat', // 新功能 feature
           'fix', // 修复 bug
           'docs', // 文档注释
           'style', // 代码格式(不影响代码运行的变动)
           'refactor', // 重构(既不增加新功能，也不是修复bug)
           'perf', // 性能优化
           'test', // 增加测试
           'chore', // 构建过程或辅助工具的变动
           'revert', // 回退
           'build' // 打包
         ]
       ],
       // subject 大小写不做校验
       'subject-case': [0]
     }
   }
   ```
#### husky
1. 安装依赖：
   ```
   npm install husky@7.0.1 --save-dev
   ```
2. 启动 `hooks` ， 生成 `.husky` 文件夹
   ```
   npx husky install
   ```
3. 在 `package.json` 中生成 `prepare` 指令（ **需要 npm > 7.0 版本** ）
   ```
   npm set-script prepare "husky install"
   ```
4. 执行 `prepare` 指令
   ```
   npm run prepare
   ```
5. 执行成功，提示
6. 添加 `commitlint` 的 `hook` 到 `husky`中，并指令在 `commit-msg` 的 `hooks` 下执行 `npx --no-install commitlint --edit "$1"` 指令
   ```
   npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
   ```
7. 此时的 `.husky` 的文件结构
那么至此，我们就已经可以处理好了 **强制规范化的提交要求**，到现在 **不符合规范的提交信息，将不可在被提交！**。
### 通过 pre-commit 检测提交时代码规范
在 **`ESLint` 与 `Prettier` 配合解决代码格式问题** 的章节中，我们讲解了如何处理 **本地！代码格式问题。**

但是这样的一个格式处理问题，他只能够在本地进行处理，并且我们还需要 **手动在  `VSCode` 中配置自动保存** 才可以。那么这样就会存在一个问题，要是有人忘记配置这个东西了怎么办呢？他把代码写的乱七八糟的直接就提交了怎么办呢？

所以我们就需要有一种方式来规避这种风险。

那么想要完成这么一个操作就需要使用 `husky` 配合 `eslint` 才可以实现。

我们期望通过 **`husky` 监测 `pre-commit` 钩子，在该钩子下执行 `npx eslint --ext .js,.vue src`** 指令来去进行相关检测：
1. 执行 `npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"` 添加 `commit` 时的 `hook` （`npx eslint --ext .js,.vue src` 会在执行到该 hook 时运行）
2. 该操作会生成对应文件 `pre-commit`
### lint-staged 自动修复格式错误
通过 `pre-commit` 处理了 **检测代码的提交规范问题，当我们进行代码提交时，会检测所有的代码格式规范** 。

但是这样会存在两个问题：
1. 我们只修改了个别的文件，没有必要检测所有的文件代码格式
2. 它只能给我们提示出对应的错误，我们还需要手动的进行代码修改
那么想要处理这两个问题，就需要使用另外一个插件 [lint-staged](https://github.com/okonet/lint-staged) ！

[lint-staged](https://github.com/okonet/lint-staged) 可以让你当前的代码检查 **只检查本次修改更新的代码，并在出现错误的时候，自动修复并且推送**

[lint-staged](https://github.com/okonet/lint-staged) 无需单独安装，我们生成项目时，`vue-cli` 已经帮助我们安装过了，所以我们直接使用就可以了

1. 修改 `package.json` 配置
   ```js
   "lint-staged": {
       "src/**/*.{js,vue}": [
         "eslint --fix",
         "git add"
       ]
     }
   ```
2. 如上配置，每次它只会在你本地 `commit` 之前，校验你提交的内容是否符合你本地配置的 `eslint`规则(这个见文档 [ESLint](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html) )，校验会出现两种结果：
   1. 如果符合规则：则会提交成功。
   2. 如果不符合规则：它会自动执行 `eslint --fix` 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。
3. 修改 `.husky/pre-commit` 文件
   ```js
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"
   npx lint-staged
   ```
4. 再次执行提交代码
5. 发现 **暂存区中** 不符合 `ESlint` 的内容，被自动修复
## 项目架构之搭建登录架构解决方案与实现
### 项目技术使用
我们将会使用最新的 vue3 script setup 语法。 `vue3` 最新特性及最新语法。
### 初始化项目结构
使用脚手架搭建。
### vue3 新特性介绍
1. `composition API`
2. 使用了 `Proxy` 代替 `Object.defineProperty()` 实现响应式
3. 全新的全家桶
4. 全新的 `TS` 支持
5. `vite`
把定义数据与使用数据的逻辑放在一起进行处理，以达到更加易读，更加方便扩展的目的。



