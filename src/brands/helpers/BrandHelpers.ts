import { BrandsDB } from '@/data';
import { Brand as BrandEntity } from '@/brands';

export class BrandHelpers {
  private static brandsDB: BrandEntity[] = BrandsDB.brands;

  public static getBrandDB(): BrandEntity[] {
    return BrandHelpers.brandsDB;
  }

  public static doesBrandExist = (brandID: string): boolean => {
    const doesBrandExist: boolean = BrandHelpers.getBrandDB().some(
      (singleBrand) => singleBrand.id === brandID,
    );
    return doesBrandExist;
  };

  public static findOneBrand = (brandID: string): BrandEntity => {
    const doesBrandExistInDB = BrandHelpers.doesBrandExist(brandID);

    if (doesBrandExistInDB) {
      const brandInDB = BrandHelpers.getBrandDB().find(
        (singleBrand) => singleBrand.id === brandID,
      );

      return brandInDB as BrandEntity;
    } else {
      throw new Error();
    }
  };
}
