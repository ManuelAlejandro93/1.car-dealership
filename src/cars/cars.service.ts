import { ConflictException, Injectable } from '@nestjs/common';
import { CarsDB } from '@/data';
import { UuidAdapter } from '@/adapters';
import { CarValidations } from '@/cars/validators';
import { CarDTO, CreateCarDTO, UpdateCarDTO } from '@/cars/dto';

@Injectable()
export class CarService {
  private _cars: CarDTO[] = CarsDB.cars;

  public findAll(): CarDTO[] {
    return this._cars;
  }

  public createNewCar(newCar: CreateCarDTO): CreateCarDTO {
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

  public updateCarData(
    carId: string,
    updatedCarBody: UpdateCarDTO,
  ): CarDTO | undefined {
    const newCarForUpdating: CarDTO = this.buildNewCarForUpdating(
      carId,
      updatedCarBody,
    );

    const newCarArray: CarDTO[] = this._cars.map((singleCar) => {
      if (singleCar.uuid === newCarForUpdating.uuid) {
        return newCarForUpdating;
      } else {
        singleCar;
      }
    }) as CarDTO[];

    this._cars = newCarArray;

    return this._cars.find(
      (singleCar) => singleCar.uuid === newCarForUpdating.uuid,
    );
  }

  public buildNewCarForUpdating(
    carId: string,
    updatedCarBody: UpdateCarDTO,
  ): CarDTO {
    const newCarForUpdating: CarDTO = this.fixNewCarProperties(
      carId,
      updatedCarBody,
    );

    return newCarForUpdating;
  }

  public fixNewCarProperties(
    carId: string,
    updatedCarBody: UpdateCarDTO,
  ): CarDTO {
    return {
      brand: updatedCarBody.brand ?? 'no brand was typed on updating process',
      model: updatedCarBody.brand ?? 'no model was typed on updating process',
      uuid: carId,
    };
  }
}
