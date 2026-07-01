import { Injectable } from '@nestjs/common';
import { SeedHelpers } from '@/seed';
import { BrandsService } from '@/brands/brands.service';
import { CarService } from '@/cars/cars.service';
import { brandSeed, carSeed } from '@/data';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandService: BrandsService,
    private readonly carService: CarService,
  ) {}
  runSeed() {
    this.brandService.runBrandSeed(brandSeed);
    this.carService.runCarSeed(carSeed);
    return SeedHelpers.runSeed();
  }
}
