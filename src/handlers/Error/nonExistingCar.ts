import { SingleCarInterface } from '../../interfaces';

export class CarErrors {
  public static nonExistingCar: SingleCarInterface = {
    brand: 'Car not-found',
    id: 0,
    model: 'non existing car',
  };
}
