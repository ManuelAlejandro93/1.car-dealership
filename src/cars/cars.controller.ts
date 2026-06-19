import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './cars.service';
import type { SingleCarInterface } from '../interfaces';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars(): SingleCarInterface[] {
    return this.carService.cars;
  }

  @Get('/:id')
  getSingleCarById(@Param('id') id: string): SingleCarInterface {
    return this.carService.cars[0];
  }
}
