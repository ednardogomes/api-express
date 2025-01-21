import { unauthorizedException } from '../../expections/unauthorized-exception.js';
import authService from '../service/auth-service.js';

class AuthController {
  async login(req, res, next) {
    const secret = process.env.secret;
    try {
      const { email, password } = req.body;
      const recivedToken = await authService.login({ email, password });

      const tokenHeader = req.headers['authorization'];
      const token = tokenHeader && tokenHeader.split(' ')[1];

      jwt.verify(token, secret);

      if (!token) {
        throw new unauthorizedException('O token é obrigatório');
      }

      if (!jwt.verify) {
        throw new unauthorizedException('Insira um token válido');
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
