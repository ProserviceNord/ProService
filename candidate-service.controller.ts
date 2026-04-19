
import { Controller, Get } from '@nestjs/common';

@Controller()
export class Candidate-serviceController {
  @Get()
  health() {
    return 'candidate-service OK';
  }
}
