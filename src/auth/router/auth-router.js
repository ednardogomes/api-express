import { Router } from 'express';
import authController from '../controller/auth-controller.js';

const authRouter = Router();
// const authController = new AuthController();

authRouter.post('/', authController.login);
authRouter.post('/');

export default authRouter;
