import { prisma } from '../../prisma/prisma.js';

class UserRepository {
  async create(data) {
    return await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
  }

  async find() {
    return await prisma.user.findMany();
  }

  async findOne(id) {
    return await prisma.user.findFirst({
      where: { id }
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id }
    });
  }
}

export default new UserRepository();
