import { SingleCarInterface } from '../../interfaces';

export class CarErrors {
  public static nonExistingCar: SingleCarInterface = {
    brand: 'Car not-found',
    uuid: 'non-uuid',
    model: 'non existing car',
  };
}
