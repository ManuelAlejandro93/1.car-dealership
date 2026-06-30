import { Injectable } from '@nestjs/common';
import { Brand as BrandEntity, CreateBrandDto, UpdateBrandDto } from '@/brands';
import { BrandsDB } from '@/data';

@Injectable()
export class BrandsService {
  private _brandsDB: BrandEntity[] = BrandsDB.brands;

  public get brandsDB(): BrandEntity[] {
    return this._brandsDB;
  }
  public set brandsDB(value: BrandEntity[]) {
    this._brandsDB = value;
  }

  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
