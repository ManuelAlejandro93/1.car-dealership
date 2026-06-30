import { Brand as BrandEntity } from '@/brands'; //Brand Entity
import { UuidAdapter, DateAdapter } from '@/adapters';

export class BrandsDB {
  public static brands: BrandEntity[] = [
    {
      id: UuidAdapter.getANewUUID(),
      name: 'mazda',
      createdAt: DateAdapter.getNow(),
    },
    {
      id: UuidAdapter.getANewUUID(),
      name: 'chevrolet',
      createdAt: DateAdapter.getNow(),
    },
    {
      id: UuidAdapter.getANewUUID(),
      name: 'suzuki',
      createdAt: DateAdapter.getNow(),
    },
  ];
}
