import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Dominio } from '../../model/dominio.entity';

export class BuscarTiposVeiculosDTO
  implements Readonly<BuscarTiposVeiculosDTO> {
  @ApiProperty({ required: true })
  @IsNumber()
  codigoDominio: number;

  @ApiProperty({ required: true })
  @IsString()
  nome: string;

  @ApiProperty({ required: true })
  @IsString()
  descricao: string;

  @ApiProperty({ required: true })
  @IsNumber()
  codigoClasse: number;

  public static from(dto: Partial<BuscarTiposVeiculosDTO>) {
    const dom = new BuscarTiposVeiculosDTO();
    dom.codigoDominio = dto.codigoDominio;
    dom.nome = dto.nome;
    dom.descricao = dto.descricao;
    dom.codigoClasse = dto.codigoClasse;
    return dom;
  }

  public static fromEntity(entity: Dominio) {
    return this.from({
      codigoDominio: entity.codigoDominio,
      nome: entity.nome,
      descricao: entity.descricao,
      codigoClasse: entity.codigoClasse,
    });
  }

  public toEntity() {
    const dom = new Dominio();
    dom.codigoDominio = this.codigoDominio;
    dom.nome = this.nome;
    dom.descricao = this.descricao;
    dom.codigoClasse = this.codigoClasse;
    dom.dataAlteracao = new Date();
    return dom;
  }
}
