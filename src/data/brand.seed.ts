import { DateAdapter, UuidAdapter } from '@/adapters';
import { BrandOnSeed } from '@/interfaces';

export const brandSeed: BrandOnSeed[] = [
  {
    name: 'Testa',
    id: UuidAdapter.getANewUUID(),
    createdAt: DateAdapter.getNow(),
  },
  {
    name: 'BYD',
    id: UuidAdapter.getANewUUID(),
    createdAt: DateAdapter.getNow(),
  },
  {
    name: 'CF CAR',
    id: UuidAdapter.getANewUUID(),
    createdAt: DateAdapter.getNow(),
  },
  {
    name: 'Huawei',
    id: UuidAdapter.getANewUUID(),
    createdAt: DateAdapter.getNow(),
  },
  {
    name: 'Xiaomi',
    id: UuidAdapter.getANewUUID(),
    createdAt: DateAdapter.getNow(),
  },
];
