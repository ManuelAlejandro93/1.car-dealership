import { Controller, Get, Param } from '@nestjs/common';
import { cars } from '../data';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return cars;
  }

  @Get('/:id')
  getSingleCarById(@Param('id') id: string) {
    return cars[id];
  }
}
