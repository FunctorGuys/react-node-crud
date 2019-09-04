import { Router } from 'express';
import { authService, postsService } from '@/services';

const routes = (app) => {
  const route = Router();

  app.use('/auth', route);

  route.get('/login', (req, res) => {
    res.render('pages/login');
  });
}

export default routes;