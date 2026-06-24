import { SingleCarInterface } from '../../interfaces';
import { cars } from '../../data';

export class CarValidations {
  public static isNewCarRepeatedDB = (newCar: SingleCarInterface): boolean => {
    const isNewCarDB: SingleCarInterface | undefined = cars.find(
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
