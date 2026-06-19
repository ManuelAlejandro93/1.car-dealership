import { Module } from '@nestjs/common';
import { CarsModule } from './cars';
import { HtmlModule } from './html/html.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, HtmlModule],
  providers: [],
})
export class AppModule {}
