import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { API_PREFIX } from '@/config';
import { routes } from '@/api';

const loader = (app) => {
  app.get('/ping', (req, res) => {
    res.status(200).end('pong');
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Helmet will set various HTTP headers to help protect your app.
  app.use(helmet());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())

  app.use(API_PREFIX, routes());

   /// Catch 404 and forward to error handler
   app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// Error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
}

export default loader;