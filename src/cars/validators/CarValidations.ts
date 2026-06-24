import { SingleCarInterface } from '@/interfaces';
import { CarsDB } from '@/data';

export class CarValidations {
  private static carsDB = CarsDB.cars;

  public static isNewCarRepeatedDB = (newCar: SingleCarInterface): boolean => {
    const isNewCarDB: SingleCarInterface | undefined = this.carsDB.find(
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
