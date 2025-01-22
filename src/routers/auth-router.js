import { Router } from 'express';
import authController from '../auth/controller/auth-controller.js';

const authRouter = Router();
// const authController = new AuthController();

authRouter.post('/', authController.login);

export default authRouter;
