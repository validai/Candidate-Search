/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GITHUB_TOKEN: string;
    readonly VITE_GITHUB_API_URL?: string; // If we have an API URL in .env
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  