export const getConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) | 3000,
  DATABASE: process.env.DATABASE,
  JWT_EXP: process.env.JWT_EXP,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
});

export const environment = getConfiguration();
