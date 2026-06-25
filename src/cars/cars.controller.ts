import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { CarService } from '@/cars/cars.service';
import { CarDTO, CreateCarDTO, UpdateCarDTO } from '@/cars/dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars(): CarDTO[] {
    return this.carService.findAll();
  }

  @Get('/:id')
  findOneById(@Param('id', ParseUUIDPipe) incoming_uuid: string): CarDTO {
    const foundSingleCarInDB: CarDTO | undefined = this.carService
      .findAll()
      .find((singleCardInDB) => singleCardInDB.uuid === incoming_uuid);

    if (!foundSingleCarInDB) {
      throw new NotFoundException(`car with uuid:${incoming_uuid} not found`);
    } else {
      return foundSingleCarInDB;
    }
  }

  @Post()
  createCar(@Body() newCarInfo: CreateCarDTO) {
    return this.carService.createNewCar(newCarInfo);
  }

  @Patch(':carId')
  updateCar(
    @Param('carId', ParseUUIDPipe) carId: string,
    @Body() updatedCarBody: UpdateCarDTO,
  ) {
    return this.carService.updateCarData(carId, updatedCarBody) as CarDTO;
  }

  @Put(':carId')
  replaceFullCar(@Param('carId', ParseUUIDPipe) carId: string) {
    return { status: 'some car, has been completely modified.', carId };
  }

  @Delete(':carId')
  deleteCar(
    @Param('carId', ParseUUIDPipe) carId: string,
  ): string | { message: string } {
    return { message: this.carService.deleteSingleCarInDB(carId) };
  }
}
