import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  onGetCars() {
    return 'There you go, all the cars.';
  }

  @Get('/:id')
  getSingleCarById() {
    return 'There you go, a single car.';
  }
}
