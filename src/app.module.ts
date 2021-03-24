import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { TiposVeiculosModule } from './tipos-veiculos/tipos-veiculos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TiposVeiculosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
