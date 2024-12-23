import taskService from '../services/task-service.js';

class TaskController {
  async create(req, res, next) {
    try {
      const params = req.body;
      const task = await taskService.create(params);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const task = await taskService.find();
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const task = await taskService.findOne(id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const params = req.body;
      const task = await taskService.update(id, params);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await taskService.delete(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async restore(req, res, next) {
    try {
      const { id } = req.params;
      const task = await taskService.restore(id);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }
}

export default new TaskController();
