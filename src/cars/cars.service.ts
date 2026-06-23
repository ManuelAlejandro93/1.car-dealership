import { Injectable } from '@nestjs/common';
import { SingleCarInterface } from '../interfaces';
import { UuidAdapter } from '../adapters';

@Injectable()
export class CarService {
  private readonly _cars: SingleCarInterface[] = [
    {
      uuid: 'b749f1ee-1f07-418c-8928-5d4b331eac17',
      brand: 'Chevrolet',
      model: 'Camaro',
    },
    {
      uuid: UuidAdapter.getANewUUID(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      uuid: UuidAdapter.getANewUUID(),
      brand: 'Suzuki',
      model: 'Jimmy',
    },
  ];

  public findAll(): SingleCarInterface[] {
    return this._cars;
  }
}
