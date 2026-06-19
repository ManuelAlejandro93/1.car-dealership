import { Module } from '@nestjs/common';
import { CarsModule } from './cars';
import { HtmlModule } from './html/html.module';
import { DefaultModule } from './default/default.module';
import { ControllerModule } from './get-car-by-id/controller/controller.module';

@Module({
  controllers: [],
  exports: [],
  imports: [CarsModule, HtmlModule, DefaultModule, ControllerModule],
  providers: [],
})
export class AppModule {}
