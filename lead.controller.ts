
import { Controller, Get } from '@nestjs/common';
import { LeadEngine } from './lead.engine';

@Controller()
export class LeadController {
  private engine = new LeadEngine();

  @Get('/run')
  async run() {
    const leads = await this.engine.generateLeads();

    for (const lead of leads) {
      await this.engine.outreach(lead);
    }

    return { sent: leads.length };
  }
}
