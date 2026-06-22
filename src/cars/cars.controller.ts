import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
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
    @Param('id', ParseIntPipe) incoming_uuid: string,
  ): SingleCarInterface {
    const singleCarById = this.carService
      .findAll()
      .find((singleCar) => singleCar.uuid === incoming_uuid);

    if (singleCarById === undefined) {
      throw new NotFoundException(`car id:${incoming_uuid} does NOT exist.`);
    } else {
      return singleCarById;
    }
  }

  @Post()
  createCar(@Body() body: SingleCarInterface) {
    console.log(body);
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
