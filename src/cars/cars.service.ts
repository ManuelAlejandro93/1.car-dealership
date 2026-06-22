import { Injectable } from '@nestjs/common';
import { SingleCarInterface } from '../interfaces';
import { UuidAdapter } from '../adapters';

@Injectable()
export class CarService {
  private readonly _cars: SingleCarInterface[] = [
    {
      uuid: UuidAdapter.getANewUUID(),
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

  public get cars(): SingleCarInterface[] {
    return this._cars;
  }

  public findAll(): SingleCarInterface[] {
    return this._cars;
  }
}
