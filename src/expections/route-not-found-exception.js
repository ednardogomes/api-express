export class RouteNotFoundException extends Error {
  name = 'ROUTE_NOT_FOUND_EXCEPTION';

  constructor() {
    super('Rota não encontrada');
  }
}
