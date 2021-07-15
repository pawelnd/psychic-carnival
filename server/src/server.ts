process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import { createConnection } from 'typeorm';
import { dbConnection } from './databases';
import { config } from './configs/config';

validateEnv();

const bootstrapApp = async () => {
  const connectToDatabase = () => {
    if (config.ENV !== 'test') {
      return createConnection(dbConnection);
    }
  };
  await connectToDatabase();

  const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);
  app.listen();
};

bootstrapApp();
