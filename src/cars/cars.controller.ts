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
} from '@nestjs/common';

import { CarService } from './cars.service';

import type { SingleCarInterface } from '../interfaces';

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
      throw new NotFoundException(`car with id:${incoming_uuid} not found`);
    } else {
      return foundSingleCarInDB;
    }
  }

  @Post()
  createCar(@Body() body: SingleCarInterface) {
    return body;
  }

  @Patch(':carId')
  updateCar(@Param('carId', ParseIntPipe) carId: number) {
    return { status: 'some car, has been updated', carId };
  }

  @Put(':carId')
  replaceFullCar(@Param('carId', ParseIntPipe) carId: number) {
    return { status: 'some car, has been completely', carId };
  }

  @Delete(':carId')
  deleteCar(@Param('carId', ParseIntPipe) carId: number) {
    return {
      status: 'a car has been deleted',
      carId,
    };
  }
}
