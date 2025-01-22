import { Router } from 'express';
import userRouter from './routers/user-router.js';
import taskRouter from './routers/task-router.js';
import authRouter from './routers/auth-router.js';
import authorization from './middleware/authorization-middleware.js';

const appRouter = Router();

appRouter
  .use('/users', authorization, userRouter)
  .use('/tasks', taskRouter)
  .use('/login', authRouter);

export default appRouter;
