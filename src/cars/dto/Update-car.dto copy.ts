import { PartialType } from '@nestjs/mapped-types';
import { CarDTO } from '@/cars/dto';

export class UpdateCarDTO extends PartialType(CarDTO) {}
