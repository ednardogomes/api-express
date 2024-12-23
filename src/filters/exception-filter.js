import { BadRequestException } from '../expections/bad-request-exception.js';
import { NotFoundException } from '../expections/not-found-exception.js';
import { RouteNotFoundException } from '../expections/route-not-found-exception.js';

export const exceptionFilter = (error, req, res, next) => {
  if (error instanceof BadRequestException) {
    return res.status(400).json({
      error: error.name,
      message: error.message
    });
  }

  if (error instanceof NotFoundException) {
    return res.status(404).json({
      error: error.name,
      message: error.message
    });
  }

  if (error instanceof RouteNotFoundException) {
    return res.status(404).json({
      error: error.name,
      message: error.message
    });
  }

  res.status(500).json({
    error: error.name,
    message: `Internal Server Error: ${error.message}`
  });
};
