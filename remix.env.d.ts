/// <reference types="@remix-run/dev" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 添加更多环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 