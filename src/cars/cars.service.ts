import { Injectable } from '@nestjs/common';
import { SingleCarInterface } from '../interfaces';
import { cars } from '../data';
import { UuidAdapter } from '../adapters';
import { CreateCarDTO } from './dto';

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
    this._cars.push(newCar);
    return this._cars[this._cars.length - 1];
  }
}
