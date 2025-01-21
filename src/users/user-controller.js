import userService from './user-service.js';

class UserController {
  async create(req, res, next) {
    try {
      const newUser = await userService.create(req.body);
      res.status(200).send('Usuário cadastrado com sucesso');
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const users = await userService.find();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    try {
      const userResult = await userService.findOne(req.params.id);
      res.status(201).send(userResult);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const newUser = await userService.update(req.params.id, req.body);
      res.status(201).send('Usuário atualizado com sucesso');
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const newUser = await userService.delete(req.params.id);
      res.status(201).send('Usuário deletado com sucesso');
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
