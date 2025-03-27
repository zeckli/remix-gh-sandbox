import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { copyFileSync } from "node:fs";
import { join, resolve } from "node:path";

// 仓库名称 - 用于GitHub Pages
const repoName = 'remix-gh-sandbox';

export default defineConfig({
  plugins: [
    remix({
      ssr: false, // 启用SPA模式的关键配置
      basename: `/${repoName}/`, // GitHub Pages 的路径前缀
      ignoredRouteFiles: ["**/.*"], // 忽略隐藏文件
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;

        // 创建404.html文件，解决GitHub Pages的路由问题
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(
          join(buildPath, "index.html"),
          join(buildPath, "404.html"),
        );
      },
    }),
    tsconfigPaths()
  ],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  build: {
    outDir: 'build/client'
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app')
    }
  },
  // 解决可能的CJS/ESM依赖问题
  ssr: {
    noExternal: []
  }
})
