import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SingleCarInterface } from '../interfaces';
import { cars } from '../data';
import { UuidAdapter } from '../adapters';
import { CreateCarDTO } from './dto';
import { CarValidations } from './validators';

@Injectable()
export class CarService {
  private _cars: SingleCarInterface[] = cars;

  public findAll(): SingleCarInterface[] {
    return this._cars;
  }

  public createNewCar(newCar: SingleCarInterface): SingleCarInterface {
    if (!newCar.uuid) {
      newCar.uuid = UuidAdapter.getANewUUID();
    }

    const isNewCarInDB: boolean = CarValidations.isNewCarRepeatedDB(newCar);

    if (!isNewCarInDB) {
      this._cars.push(newCar);
      return this._cars[this._cars.length - 1];
    } else {
      throw new ConflictException('Perrito esto está, repetido.');
    }
  }
}
