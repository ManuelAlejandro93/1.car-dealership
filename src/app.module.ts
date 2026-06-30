import { Module } from '@nestjs/common';
import { CarsModule } from './cars';
import { BrandsModule } from './brands/brands.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, BrandsModule],
  providers: [],
})
export class AppModule {}
