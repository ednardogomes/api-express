import { BadRequestException } from '../expections/bad-request-exception.js';
import { NotFoundException } from '../expections/not-found-exception.js';
import taskRepository from './task-repository.js';

class TaskService {
  async create({ title, description }) {
    if (!title) throw new BadRequestException('title is required');
    if (!description) throw new BadRequestException();

    return await taskRepository.create({ title, description });
  }

  async find() {
    const tasks = await taskRepository.find();
    if (tasks.length > 0) return tasks;

    throw new NotFoundException('Nenhuma tarefa encontrada');
  }

  async findOne(id) {
    if (!id) throw new BadRequestException('id is required');

    const _id = Number(id);
    if (isNaN(_id)) throw new BadRequestException('Invalid id');

    const task = await taskRepository.findOne(_id);
    if (task) return task;

    throw new NotFoundException('Tarefa encontrada');
  }

  async update(id, { title = null, description = null }) {
    if (!id) throw new BadRequestException('id is required');

    const _id = Number(id);
    if (isNaN(_id)) throw new BadRequestException('Invalid id');

    const task = await this.findOne(_id);
    await taskRepository.update(_id, {
      title: title || task.title,
      description: description || task.description
    });
    console.log(title, description);
  }

  async delete(id) {
    if (!id) throw new BadRequestException('id is required');

    const _id = Number(id);
    if (isNaN(_id)) throw new BadRequestException('Invalid id');

    await taskRepository.remove(_id);
    return { message: 'Task deleted' };
  }

  async restore(id) {
    if (!id) throw new BadRequestException('id is required');

    const _id = Number(id);
    if (isNaN(_id)) throw new BadRequestException('Invalid id');

    return await taskRepository.restore(_id);
  }
}

export default new TaskService();
