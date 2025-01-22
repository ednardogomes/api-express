import { unauthorizedException } from '../../expections/unauthorized-exception.js';
import authService from '../service/auth-service.js';

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const recivedToken = await authService.login({ email, password });

      res.status(200).json({
        statusCode: 200,
        message: 'Login Realizado com sucesso',
        data: {
          token: recivedToken
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        statusCode: 500,
        message: error.message
      });
    }
  }
}

export default new AuthController();
