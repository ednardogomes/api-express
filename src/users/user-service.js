import { BadRequestException } from '../expections/bad-request-exception.js';
import userRespository from './user-respository.js';

class UserService {
  async create(data) {
    const { name, email } = data;
    if (!name) {
      throw new BadRequestException('name is required');
    }

    if (!email) {
      throw new BadRequestException('email is required');
    }

    await userRespository.create(data);
  }

  async find() {
    return await userRespository.find();
  }

  async findOne(id) {
    return await userRespository.findOne(id);
  }

  async update(id, data) {
    const { name, password, email } = data;
    if (!name) throw new BadRequestException('name is required');
    if (!password) throw new BadRequestException('password is required');
    if (!email) throw new BadRequestException('email is required');
    await userRespository.update(id, data);
  }

  async delete(id) {
    if (!id) {
      throw new BadRequestException('Id is required');
    }
    await userRespository.delete(id);
  }
}

export default new UserService();
