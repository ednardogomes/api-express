import express from 'express';
import taskRouter from './routers/task-router.js';
import userRouter from './routers/user-router.js';
import { exceptionFilter } from './filters/exception-filter.js';
import { roteNotFound } from './middleware/rote-not-found.js';
import { prisma } from '../prisma/prisma.js';
import authRouter from './auth/router/auth-router.js';

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('/tasks', taskRouter);
app.use('/user', userRouter);
app.use('/login', authRouter);
// app.post('/user', (req, res, next) => {
//   try {
//     const user = req.body;

//     if (user.age < 18) {
//       throw new Error();
//     }

//     prisma.task.create({
//       data: {
//         title: user.name,
//         description: user.subName
//       }
//     });
//   } catch (error) {
//     next(error);
//   }
// });
app.use(roteNotFound, exceptionFilter);

const port = process.env.PORT;
app.listen(port);
