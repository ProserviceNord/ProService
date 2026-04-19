
import { Controller, Get } from '@nestjs/common';

@Controller()
export class GatewayController {
  @Get()
  health() {
    return 'gateway OK';
  }
}
