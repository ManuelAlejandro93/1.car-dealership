import { Module } from '@nestjs/common';
import { CarsModule } from './cars';
import { HtmlModule } from './html/html.module';
import { DefaultModule } from './default/default.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, HtmlModule, DefaultModule],
  providers: [],
})
export class AppModule {}
