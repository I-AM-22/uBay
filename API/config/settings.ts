import { config } from 'dotenv';

config({ path: `${__dirname}/../../.env` });

export const settings = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET_KEY || 'cnasklcnsklcaskl',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  IMGUR_CLIENT_ID: process.env.IMGUR_CLIENT_ID,
  IMGUR_CLIENT_SECRET: process.env.IMGUR_CLIENT_SECRET,
  DB: {
    DATABASE: process.env.DATABASE,
    PASSWORD: process.env.PASSWORD || ' ',
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
