
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Notification-serviceController {
  @Get()
  health() {
    return 'notification-service OK';
  }
}
