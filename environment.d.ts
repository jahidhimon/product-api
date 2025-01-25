declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      DATABSE_URL: string;
      PORT?: string;
    }
  }
}

export {};
