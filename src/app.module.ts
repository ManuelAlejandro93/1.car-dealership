import { Module } from '@nestjs/common';
import { CarsModule } from './cars';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule],
  providers: [],
})
export class AppModule {}
