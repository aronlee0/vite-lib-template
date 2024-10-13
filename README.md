# vite-template-lib

English | [中文简体](README.cn.md)

This is a initial template to build your library package.

It is a **lite** template, if you want to add more, clone and just do.
But I like lite. if I want to create a utility or lib, I just clone and start to do at once.

## Usage

### 1. First way(use `degit`):

```shell
npx degit aronlee0/vite-lib-template my-project

# or npm, yarn
cd my-project && pnpm install
```

### 2. Second way:

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

ps: The `example` directory is for debugging, listing example or previewing your libraries's functionality on browser.

### Commands

- `npm run dev`: Start a server, the entry file is "example/index.html"
- `npm run build`: Build your library code, **then generate ts declarations(\*.d.ts) files**
- `npm run types`: Generate ts declarations(\*.d.ts) files
- `npm run test`: Run all test case with jest

### TODO list:

[ ] Configuration release to npm registry

## Thanks theses exellents tools for our lib construction

🛠 [**Vite**](https://vite.dev/) for building, It's easy to configurate, even zero configuration.  
🎸 [**Typescript**](https://www.typescriptlang.org/)  
👩🏼‍🚒 [**Jest**](https://jestjs.io/) for testing  
💅 [**Prettier**](https://prettier.io/) to format your code
