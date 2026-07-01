import { CarDTO } from '@/cars/dto';
import { UuidAdapter } from '@/adapters';

export const carSeed: CarDTO[] = [
  { brand: 'Testa', model: 'Space X - 2', uuid: UuidAdapter.getANewUUID() },
  { brand: 'BYD', model: 'Electron 1', uuid: UuidAdapter.getANewUUID() },
  { brand: 'CF CAR', model: '4.5 Plugin', uuid: UuidAdapter.getANewUUID() },
  { brand: 'Huawei', model: 'P20Lite Car', uuid: UuidAdapter.getANewUUID() },
  {
    brand: 'Xiaomi',
    model: 'Electronic Hero',
    uuid: UuidAdapter.getANewUUID(),
  },
];
