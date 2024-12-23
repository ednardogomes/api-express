import { prisma } from '../../prisma/prisma.js';
import { BadRequestException } from '../expections/bad-request-exception.js';
import { NotFoundException } from '../expections/not-found-exception.js';

class TaskRepository {
  async create({ title, description }) {
    return await prisma.task.create({
      data: {
        title,
        description
      }
    });
  }

  async find() {
    return await prisma.task.findMany({
      where: { deletedAt: null }
    });
  }

  async findOne(id) {
    return await prisma.task.findFirst({
      where: { id, deletedAt: null }
    });
  }

  async update(id, { title, description }) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task não encontrada');

    return await prisma.task.update({
      where: { id, deletedAt: null },
      data: { title, description }
    });
  }

  async remove(id) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException('Task não encontrada');

    await prisma.task.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }

  async restore(id) {
    const task = await prisma.task.findFirst({ where: { id } });
    if (!task) throw new NotFoundException('Tarefa não existe');
    if (!task.deletedAt)
      throw new BadRequestException('Tarefa não foi deletada');

    return await prisma.task.update({
      where: { id },
      data: { deletedAt: null }
    });
  }
}

export default new TaskRepository();
