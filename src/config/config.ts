export type ConfigType = {
  app: {
    port: number;
    enableSwagger: boolean;
  };
  mpd: {
    host: string;
    port: number;
    path?: string;
    password?: string;
  };
  ym: {
    email: string;
    password: string;
  };
};

export default (): ConfigType => ({
  app: {
    port: Number.parseInt(process.env.APP_PORT, 10) || 3000,
    enableSwagger: Boolean(process.env.APP_ENABLE_SWAGGER) || true,
  },
  mpd: {
    host: process.env.MPD_HOST || 'localhost',
    port: Number.parseInt(process.env.MPD_PORT, 10) || 6600,
    path: process.env.MPD_PATH || '/',
    password: process.env.MPD_PASSWORD || '',
  },
  ym: {
    email: process.env.YM_EMAIL || '',
    password: process.env.YM_PASSWORD || '',
  },
});
