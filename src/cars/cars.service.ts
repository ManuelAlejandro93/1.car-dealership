import { ConflictException, Injectable } from '@nestjs/common';
import { SingleCarInterface } from '../interfaces';
import { CarsDB } from '../data';
import { UuidAdapter } from '../adapters';
import { CarValidations } from './validators';
import { UpdateCarDTO } from './dto';

@Injectable()
export class CarService {
  private _cars: SingleCarInterface[] = CarsDB.cars;

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
      throw new ConflictException('This car is already in inside the DB');
    }
  }

  public updateCarData(newCar: SingleCarInterface) {
    const newCarArray: SingleCarInterface[] = this._cars.map((singleCar) => {
      if (singleCar.uuid === newCar.uuid) {
        return newCar;
      } else {
        singleCar;
      }
    }) as SingleCarInterface[];

    this._cars = newCarArray as SingleCarInterface[];
  }
}
