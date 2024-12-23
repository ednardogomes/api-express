import { RouteNotFoundException } from '../expections/route-not-found-exception.js';

export const roteNotFound = (req, res, next) => {
  const error = new RouteNotFoundException();
  next(error);
};
