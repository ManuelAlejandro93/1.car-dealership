import { PartialType } from '@nestjs/mapped-types';
import { CarDTO } from './Car-dto';

export class UpdateCarDTO extends PartialType(CarDTO) {}
