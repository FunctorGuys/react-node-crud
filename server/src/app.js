import express from 'express';
import { envLoader, expressLoader } from './loaders';
import * as CONFIG from './config';

const startServer = () => {
  const app = express();

  expressLoader(app);

  app.listen(CONFIG.PORT, (err) => {
    if (err) {
      process.exit(1);
      return;
    }

    console.log('App listen on: http://localhost:' + CONFIG.PORT)
  });
};

startServer();