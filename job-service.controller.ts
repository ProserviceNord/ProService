
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Job-serviceController {
  @Get()
  health() {
    return 'job-service OK';
  }
}
