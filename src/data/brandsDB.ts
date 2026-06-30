import { Brand as BrandEntity } from '@/brands'; //Brand Entity
import { UuidAdapter } from '@/adapters';

export class BrandsDB {
  public static brands: BrandEntity[] = [
    {
      id: UuidAdapter.getANewUUID(),
      name: 'mazda',
      createdAt: 1,
    },
    {
      id: UuidAdapter.getANewUUID(),
      name: 'chevrolet',
      createdAt: 2,
    },
    {
      id: UuidAdapter.getANewUUID(),
      name: 'suzuki',
      createdAt: 3,
    },
  ];
}
