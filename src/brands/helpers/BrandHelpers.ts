import { BrandsDB } from '@/data';
import {
  Brand,
  Brand as BrandEntity,
  CreateBrandDto,
  UpdateBrandDto,
} from '@/brands';
import { DateAdapter, UuidAdapter } from '@/adapters';

export class BrandHelpers {
  private static _brandsDB: BrandEntity[] = BrandsDB.brands;

  public static setBrandsDB(value: BrandEntity[]) {
    BrandHelpers._brandsDB = value;
  }

  public static getBrandDB(): BrandEntity[] {
    return BrandHelpers._brandsDB;
  }

  public static doesBrandExist = (brandID: string): boolean => {
    const doesBrandExist: boolean = BrandHelpers.getBrandDB().some(
      (singleBrand) => singleBrand.id === brandID,
    );
    return doesBrandExist;
  };

  public static findOneBrand = (brandName: string): BrandEntity => {
    const doesBrandExistInDB = BrandHelpers.doesBrandExist(brandName);

    if (doesBrandExistInDB) {
      const brandInDB = BrandHelpers.getBrandDB().find(
        (singleBrand) => singleBrand.name === brandName,
      );

      return brandInDB as BrandEntity;
    } else {
      throw new Error();
    }
  };

  public static updateOneBrand = (
    brandID: string,
    updateBrandDto: UpdateBrandDto,
  ): BrandEntity => {
    const doesBrandExistInDB = BrandHelpers.doesBrandExist(brandID);

    if (doesBrandExistInDB) {
      const newBrandArray: BrandEntity[] = BrandHelpers.getBrandDB().map(
        (singleBrand) => {
          if (singleBrand.id === brandID) {
            return {
              name: updateBrandDto.name ?? 'No new name was provided',
              id: brandID,
              createdAt: singleBrand.createdAt,
              updatedAt: DateAdapter.getNow(),
            };
          } else {
            return singleBrand;
          }
        },
      );

      BrandHelpers.setBrandsDB(newBrandArray);

      return BrandHelpers.getBrandDB().find(
        (singleBrand) => singleBrand.id === brandID,
      ) as Brand;
    } else {
      throw new Error();
    }
  };

  public static createNewBrand(createBrandDto: CreateBrandDto) {
    const newBrand: BrandEntity = {
      id: UuidAdapter.getANewUUID(),
      name: createBrandDto.name,
      createdAt: DateAdapter.getNow(),
    };

    const doesBrandExistInDB = BrandHelpers.doesBrandExist(
      createBrandDto.name ?? '',
    );

    if (doesBrandExistInDB) {
      throw new Error();
    } else {
      BrandHelpers.getBrandDB().push(newBrand);

      return BrandHelpers.getBrandDB().find(
        (singleBrand) => singleBrand.id === newBrand.id,
      );
    }
  }
}
