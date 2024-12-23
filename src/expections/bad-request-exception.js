export class BadRequestException extends Error {
  name = 'BAD_REQUEST_EXCEPTION';

  constructor(message) {
    const _message = message ?? 'Erro de validação';
    super(_message);
  }
}
