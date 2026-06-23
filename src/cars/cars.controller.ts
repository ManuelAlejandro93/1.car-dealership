import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CarService } from './cars.service';
import type { SingleCarInterface } from '../interfaces';
import { CreateCarDTO } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllCars(): SingleCarInterface[] {
    return this.carService.findAll();
  }

  @Get('/:id')
  findOneById(
    @Param('id', ParseUUIDPipe) incoming_uuid: string,
  ): SingleCarInterface {
    const foundSingleCarInDB: SingleCarInterface | undefined = this.carService
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
    return this.carService.createNewCar(
      newCarInfo as unknown as SingleCarInterface,
    );
  }

  @Patch(':carId')
  updateCar(@Param('carId', ParseUUIDPipe) carId: string) {
    return { status: 'some car, has been updated', carId };
  }

  @Put(':carId')
  replaceFullCar(@Param('carId', ParseUUIDPipe) carId: string) {
    return { status: 'some car, has been completely modified.', carId };
  }

  @Delete(':carId')
  deleteCar(@Param('carId', ParseUUIDPipe) carId: string) {
    return {
      status: 'a car has been deleted',
      carId,
    };
  }
}
