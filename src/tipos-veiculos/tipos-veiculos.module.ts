import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposVeiculosService } from './tipos-veiculos.service';
import { TiposVeiculosController } from './tipos-veiculos.controller';
import { Dominio } from '../model/dominio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dominio])],
  providers: [TiposVeiculosService],
  controllers: [TiposVeiculosController],
  exports: [],
})
export class TiposVeiculosModule {}
