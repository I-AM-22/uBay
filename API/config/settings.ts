import { config } from 'dotenv';

config();

export const settings = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET_KEY || 'cnasklcnsklcaskl',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  DB: {
    DATABASE: process.env.DATABASE,
    PASSWORD: process.env.PASSWORD,
    DATABASE_LOCAL: process.env.DATABASE_LOCAL,
  },
  MAILER: {
    HOST: process.env.EMAIL_HOST,
    PORT: process.env.EMAIL_PORT,
    USERNAME: process.env.EMAIL_USERNAME,
    PASSWORD: process.env.EMAIL_PASSWORD,
    FROM_ADDRESS: process.env.EMAIL_FROM,
    FROM_NAME: process.env.EMAIL_FROM_NAME,
  },
};
