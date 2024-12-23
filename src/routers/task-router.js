import { Router } from 'express';
import taskController from '../controllers/task-controller.js';

const taskRouter = Router();

taskRouter
  .post('/', taskController.create)
  .get('/', taskController.find)
  .get('/:id', taskController.findOne)
  .patch('/:id', taskController.update)
  .delete('/:id', taskController.delete)
  .patch('/:id/restore', taskController.restore);

export default taskRouter;
