import { ConflictException, Injectable } from '@nestjs/common';
import { CarsDB } from '@/data';
import { UuidAdapter } from '@/adapters';
import { CarValidations } from '@/cars/validators';
import { SingleCarDTO } from '@/general-dtos';

@Injectable()
export class CarService {
  private _cars: SingleCarDTO[] = CarsDB.cars;

  public findAll(): SingleCarDTO[] {
    return this._cars;
  }

  public createNewCar(newCar: SingleCarDTO): SingleCarDTO {
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

  public updateCarData(newCar: SingleCarDTO) {
    const newCarArray: SingleCarDTO[] = this._cars.map((singleCar) => {
      if (singleCar.uuid === newCar.uuid) {
        return newCar;
      } else {
        singleCar;
      }
    }) as SingleCarDTO[];

    this._cars = newCarArray;
  }
}
