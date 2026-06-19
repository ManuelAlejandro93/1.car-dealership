import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  onGetCars() {
    return 'There you go, all the cars.';
  }

  @Get('/single-car')
  onGetSingleCar() {
    return 'There you go, a single car.';
  }
}
