import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Brand as BrandEntity,
  CreateBrandDto,
  UpdateBrandDto,
  BrandHelpers,
} from '@/brands';

@Injectable()
export class BrandsService {
  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll(): BrandEntity[] {
    return BrandHelpers.getBrandDB();
  }

  findOne(id: string): BrandEntity {
    try {
      const brandInDB: BrandEntity = BrandHelpers.findOneBrand(id);
      return brandInDB;
    } catch (error) {
      throw new NotFoundException(`Brand with id: ${id} does not exist`);
    }
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
