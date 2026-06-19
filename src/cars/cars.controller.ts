import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarService } from './cars.service';
import type { SingleCarInterface } from '../interfaces';
import { CarErrors } from '../handlers';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars(): SingleCarInterface[] {
    return this.carService.findAll();
  }

  // @Get('/:id')
  // findOneById(@Param('id') id: string): SingleCarInterface {
  //   const singleCarById =
  //     this.carService.findAll().find((singleCard) => singleCard.id === +id) ??
  //     CarErrors.nonExistingCar;
  //   return singleCarById;
  // }

  @Get('/:id')
  findOneById(@Param('id', ParseIntPipe) id: number): SingleCarInterface {
    const singleCarById =
      this.carService.findAll().find((singleCard) => singleCard.id === id) ??
      CarErrors.nonExistingCar;
    return singleCarById;
  }
}
