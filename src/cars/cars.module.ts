import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarService } from './cars.service';

@Module({
  controllers: [CarsController],
  imports: [],
  providers: [CarService],
})
export class CarsModule {}
