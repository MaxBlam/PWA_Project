/// <reference types="vite/client" />
interface ImportMetaEnv {
  BASE_URL: string;
  // Add other environment variables here, with their types
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
