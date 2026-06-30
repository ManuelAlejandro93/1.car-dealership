import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Brand as BrandEntity,
  CreateBrandDto,
  UpdateBrandDto,
  BrandHelpers,
} from '@/brands';

@Injectable()
export class BrandsService {
  create(createBrandDto: CreateBrandDto) {
    try {
      const brandInDB: BrandEntity = BrandHelpers.createNewBrand(
        createBrandDto,
      ) as BrandEntity;
      return brandInDB;
    } catch (error) {
      throw new ConflictException(
        `Brand with name: ${createBrandDto.name} already exists`,
      );
    }
  }

  findAll(): BrandEntity[] {
    return BrandHelpers.getBrandDB();
  }

  findOne(name: string): BrandEntity {
    try {
      const brandInDB: BrandEntity = BrandHelpers.findOneBrand(name);
      return brandInDB;
    } catch (error) {
      throw new NotFoundException(`Brand with id: ${name} does not exist`);
    }
  }

  update(id: string, updateBrandDto: UpdateBrandDto): BrandEntity {
    try {
      const newBrandInDB: BrandEntity = BrandHelpers.updateOneBrand(
        id,
        updateBrandDto,
      );
      return newBrandInDB;
    } catch (error) {
      throw new NotFoundException(`Brand with id: ${id} does not exist`);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
