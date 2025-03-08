import { HttpStatus } from '@nestjs/common';
// End Generation Here
export class P2PIntentAlreadyExistsException extends Error {
  public readonly statusCode: number;

  constructor(intentId: number) {
    super(`P2P intent ${intentId} already exists`);
    this.name = 'P2PIntentAlreadyExistsException';
    this.statusCode = HttpStatus.CONFLICT;
  }
}
