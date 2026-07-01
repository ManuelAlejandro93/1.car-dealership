import { Module } from '@nestjs/common';
import { CarsModule } from './cars';
import { BrandsModule } from '@/brands';
import { SeedModule } from './seed/seed.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, BrandsModule, SeedModule],
  providers: [],
})
export class AppModule {}
