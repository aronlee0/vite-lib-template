# vite-template-lib

[English](README.md) | README.cn.md

这是一个用来构建lib包的初始化模板

这是一个 **清量化** 的模板， 如果你想增加更多配置和功能， clone下来随便加

但我喜欢清量化， 如果我想写一个工具或者lib， 我只需克隆下来就可以开始写了

## 用法

### 1. 第一种方式(使用`degit`):

```shell
npx degit aronlee0/vite-lib-template my-project

# or npm, yarn
cd my-project && pnpm install
```

### 2. 第二种:

```shell
$ git clone --depth=1 https://github.com/aronlee0/vite-lib-template.git my-project && rm -rf ./my-project/.git

# or npm, yarn
$ cd my-project && pnpm install
```

### The directory structure looks like:

```shell
└── vite-lib-template/
    ├── .vscode/
    │   └── settings.json
    ├── dist/
    │   ├── index.cjs
    │   ├── index.d.ts
    │   ├── index.d.ts.map
    │   └── index.js
    ├── example/
    │   ├── index.ts
    │   ├── index.html
    │   └── index.css
    ├── lib/
    │   ├── index.ts
    │   └── index.test.ts
    ├── .prettier
    ├── jest.config.ts
    ├── tsconfig.json
    ├── tsconfig.types.json
    └── vite.config.ts
```

ps: `example`目录是用来在浏览器调试，举例或者预览你的库功能的

### 命令

- `npm run dev`: 启动一个local server, 入口文件是"example/index.html"
- `npm run build`: 构建你的lib代码, **然后生成ts声明文件(\*.d.ts)**
- `npm run types`: 生成ts声明文件(\*.d.ts)
- `npm run test`: 跑jest

### TODO list:

[ ] Configuration release to npm registry

## 感谢下面这些优质的工具

🛠 [**Vite**](https://vite.dev/) for building, It's easy to configurate, even zero configuration.  
🎸 [**Typescript**](https://www.typescriptlang.org/)  
👩🏼‍🚒 [**Jest**](https://jestjs.io/) for testing  
💅 [**Prettier**](https://prettier.io/) to format your code
