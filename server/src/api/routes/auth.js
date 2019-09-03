import { Router } from 'express';

const routes = (app) => {
  const route = Router();

  app.use('/auth', route);

  route.get('/login', (req, res) => {
    res.status(200).end('Login page');
  });
}

export default routes;