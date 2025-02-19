import jwt from 'jsonwebtoken';
import userRespository from '../../users/user-respository.js';
import { unauthorizedException } from '../../expections/unauthorized-exception.js';
import { NotFoundException } from '../../expections/not-found-exception.js';

class AuthService {
  async login(data) {
    const secret = process.env.SECRET;
    const expiresIn = process.env.EXPIRESIN;
    const { email, password } = data;

    const userDB = await userRespository.findOne(email.email);

    if (!userDB) {
      throw new NotFoundException('Usuário ou senha incorretos');
    }

    const passwordDB = userDB.password;

    if (password !== passwordDB) {
      throw new unauthorizedException('Usuário ou senha incorretos');
    }

    const token = jwt.sign({ email }, secret, { expiresIn });
    return token;
  }
}

export default new AuthService();
