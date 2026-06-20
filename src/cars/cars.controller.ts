import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
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
  findOneById(@Param('id', ParseIntPipe) id: number): SingleCarInterface {
    const singleCarById = this.carService
      .findAll()
      .find((singleCard) => singleCard.id === id);

    if (singleCarById === undefined) {
      throw new NotFoundException(`car id:${id} does NOT exist.`);
    } else {
      return singleCarById;
    }
  }

  @Post()
  createCar(@Body() body: SingleCarInterface) {
    console.log(body);
    return body;
  }
}
