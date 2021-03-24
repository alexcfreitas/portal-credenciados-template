import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dominio } from '../model/dominio.entity';
import { Repository } from 'typeorm';
import { BuscarTiposVeiculosDTO } from './dto/buscar-tipos-veiculos.dto';

const CLASSE_TIPO_VEICULO = 121;

@Injectable()
export class TiposVeiculosService {
  constructor(
    @InjectRepository(Dominio) private readonly repo: Repository<Dominio>,
  ) {}

  public async getAll(): Promise<BuscarTiposVeiculosDTO[]> {
    return await this.repo
      .find({ where: { codigoClasse: CLASSE_TIPO_VEICULO, flagAtivo: true } })
      .then((tiposVeiculos) =>
        tiposVeiculos.map((e) => BuscarTiposVeiculosDTO.fromEntity(e)),
      );
  }

  public async create(
    dto: BuscarTiposVeiculosDTO,
  ): Promise<BuscarTiposVeiculosDTO> {
    return this.repo
      .save(dto.toEntity())
      .then((e) => BuscarTiposVeiculosDTO.fromEntity(e));
  }
}
