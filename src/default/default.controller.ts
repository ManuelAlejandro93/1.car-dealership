import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {
  @Get()
  onDefaultGet(): string {
    return 'Papi, estamos ready.';
  }
}
