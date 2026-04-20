
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Matching-serviceController {
  @Get()
  health() {
    return 'matching-service OK';
  }
}
