import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidAgeException extends HttpException {
  constructor() {
    super('Invalid Age', HttpStatus.FORBIDDEN);
  }
}
