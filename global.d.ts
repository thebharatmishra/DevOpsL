// global.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    INFRA_API_KEY: string;

    // Add other environment variables here
  }
}
