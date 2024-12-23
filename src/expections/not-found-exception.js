export class NotFoundException extends Error {
  name = 'NOT_FOUND_EXCEPTION';

  constructor(message) {
    const _message = message ?? 'Não encontrado';
    super(_message);
  }
}
