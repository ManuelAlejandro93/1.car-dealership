import { Module } from '@nestjs/common';
import { CarsController } from '@/cars/cars.controller';
import { CarService } from '@/cars/cars.service';

@Module({
  controllers: [CarsController],
  imports: [],
  providers: [CarService],
})
export class CarsModule {}
