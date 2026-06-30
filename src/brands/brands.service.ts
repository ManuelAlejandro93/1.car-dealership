import {
  Injectable,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  UsePipes,
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
