import { Injectable } from '@nestjs/common';

interface SingleCarInterface {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarService {
  private readonly _cars: SingleCarInterface[] = [
    {
      id: 1,
      brand: 'Chevrolet',
      model: 'Camaro',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 3,
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
