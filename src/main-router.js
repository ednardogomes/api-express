import { Router } from 'express';
import userRouter from './routers/user-router.js';
import taskRouter from './routers/task-router.js';

const appRouter = Router();

appRouter.use('/users', userRouter).use('/tasks', taskRouter);

export default appRouter;
