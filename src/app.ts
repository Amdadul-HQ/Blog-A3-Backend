import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHander from './app/middleware/globalErrorHander';
import notFound from './app/middleware/notFound';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://assigement3-1wjbzh7ts-amdadul-hqs-projects.vercel.app',
    ],
  }),
);
app.use(cookieParser());

// application routes
app.use('/api', router);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

app.use(globalErrorHander);


app.use(notFound);

export default app;