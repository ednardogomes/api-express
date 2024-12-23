import { unauthorizedException } from '../../expections/unauthorized-exception.js';
import authService from '../service/auth-service.js';

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const recivedToken = await authService.login({ email, password });

      const tokenHeader = req.headers['authorization'];
      const token = tokenHeader && tokenHeader.split(' ')[1];

      if (!token) {
        throw new unauthorizedException('Token Inválido.!');
      }
      res.status(200).json({
        statusCode: 200,
        message: 'Login realizado com sucesso',
        data: {
          recivedToken
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
