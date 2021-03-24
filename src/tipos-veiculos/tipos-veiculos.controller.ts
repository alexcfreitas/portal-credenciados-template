import { Controller, Get, Post, Body } from '@nestjs/common';
import { TiposVeiculosService } from './tipos-veiculos.service';
import { BuscarTiposVeiculosDTO } from './dto/buscar-tipos-veiculos.dto';

@Controller('tipos-veiculos')
export class TiposVeiculosController {
  constructor(private serv: TiposVeiculosService) {}

  @Get('/buscar')
  public async getAll(): Promise<BuscarTiposVeiculosDTO[]> {
    return await this.serv.getAll();
  }

  @Post('/criar')
  public async post(
    @Body() dto: BuscarTiposVeiculosDTO,
  ): Promise<BuscarTiposVeiculosDTO> {
    return dto;
  }
}
