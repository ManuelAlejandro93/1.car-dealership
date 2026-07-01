import { BrandsDB, brandSeed } from '@/data';
import { Brand as BrandEntity, CreateBrandDto, UpdateBrandDto } from '@/brands';
import { DateAdapter, UuidAdapter } from '@/adapters';
import { BrandOnSeed } from '@/interfaces';

export class BrandHelpers {
  private static _brandsDB: BrandEntity[] = BrandsDB.brands;

  public static setBrandsDB(value: BrandEntity[]) {
    BrandHelpers._brandsDB = value;
  }

  public static getBrandDB(): BrandEntity[] {
    return BrandHelpers._brandsDB;
  }

  public static doesBrandExistByID = (brandID: string): boolean => {
    const doesBrandExist: boolean = BrandHelpers.getBrandDB().some(
      (singleBrand) => singleBrand.id === brandID,
    );
    return doesBrandExist;
  };

  public static doesBrandExistByName = (brandName: string): boolean => {
    const doesBrandExist: boolean = BrandHelpers.getBrandDB().some(
      (singleBrand) => singleBrand.name === brandName,
    );
    return doesBrandExist;
  };

  public static findOneBrand = (brandName: string): BrandEntity => {
    const doesBrandExistInDB = BrandHelpers.doesBrandExistByName(brandName);

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
    const doesBrandExistInDB = BrandHelpers.doesBrandExistByID(brandID);

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
      ) as BrandEntity;
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

    const doesBrandExistInDB = BrandHelpers.doesBrandExistByName(
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

  public static deleteBrandByID(brandID: string): { message: string } {
    const doesBrandExistInDB = BrandHelpers.doesBrandExistByID(brandID ?? '');

    if (!doesBrandExistInDB) {
      throw new Error();
    } else {
      const newBrandArray: BrandEntity[] = BrandHelpers.getBrandDB().filter(
        (singleBrand) => singleBrand.id !== brandID,
      );

      BrandHelpers.setBrandsDB(newBrandArray);
      return {
        message: `Brand with id: ${brandID} was deleted`,
      };
    }
  }

  public static fillBrandsWithSeedData = (brandSeed: BrandOnSeed[]): void => {
    BrandHelpers.setBrandsDB(brandSeed);
  };
}
