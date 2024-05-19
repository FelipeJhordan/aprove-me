export const getConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) | 3000,
  DATABASE: process.env.DATABASE,
});

export const environment = getConfiguration();
