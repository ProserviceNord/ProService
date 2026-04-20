
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Lead-serviceController {
  @Get()
  health() {
    return 'lead-service OK';
  }
}
