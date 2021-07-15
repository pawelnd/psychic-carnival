export const config = {
  ENV: process.env.NODE_ENV || 'development',

  PORT: process.env.PORT || 8080,
  PORT_ADMIN: process.env.PORT || 8081,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,

  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  FRONTEND_REDIRECT_BASE_URL: process.env.FRONTEND_REDIRECT_BASE_URL,

  JWT_SECRET: process.env.JWT_SECRET,

  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  MAIL_FROM: process.env.MAIL_FROM,
};
