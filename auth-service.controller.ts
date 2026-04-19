
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Auth-serviceController {
  @Get()
  health() {
    return 'auth-service OK';
  }
}
