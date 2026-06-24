import { CarsDB } from '@/data';
import { CreateCarDTO } from '@/cars/dto';

export class CarValidations {
  private static carsDB = CarsDB.cars;

  public static isNewCarRepeatedDB = (newCar: CreateCarDTO): boolean => {
    const isNewCarDB: CreateCarDTO | undefined = this.carsDB.find(
      (singleCarDB) =>
        singleCarDB.brand === newCar.brand &&
        singleCarDB.model === newCar.model,
    );

    if (!isNewCarDB) {
      return false;
    } else {
      return true;
    }
  };
}
