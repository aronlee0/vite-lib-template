import path from "node:path";
import fs from "node:fs";
import { defineConfig, version as VITE_VERSION } from "vite";

const VERSION = JSON.parse(
  fs.readFileSync(resolve("package.json"), "utf-8")
).version;

function resolve(...args: string[]): string {
  return path.join(__dirname, ...args);
}

function getPackageVersion(pkgName: string): string {
  const pkgJsonPath = resolve(`node_modules/${pkgName}/package.json`);
  if (fs.existsSync(pkgJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    console.log(`Found [${pkgName}] version: -> ${pkg.version}`);
    return pkg.version;
  }
  return "";
}

export default defineConfig({
  publicDir: false,
  define: {
    "process.env.VERSION": JSON.stringify(VERSION),
    "process.env.VITE_VERSION": JSON.stringify(VITE_VERSION),
    "process.env.TS_VERSION": JSON.stringify(getPackageVersion("typescript")),
  },
  resolve: {
    alias: {
      "@/*": resolve("/*"),
    },
  },
  server: {
    fs: {
      cachedChecks: false,
    },
    open: "/example/index.html",
  },
  build: {
    outDir: "dist",
    minify: true,

    lib: {
      entry: {
        index: resolve("lib/index.ts"),
      },
      name: "index",
      formats: ["cjs", "es"],
    },
  },
});
