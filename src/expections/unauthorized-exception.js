export class unauthorizedException extends Error {
  name = 'UNAUTHORIZED_EXCEPTION';

  constructor(message) {
    const _message = message ?? 'Não Autorizado';
    super(_message);
  }
}
