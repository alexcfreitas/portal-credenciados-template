import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposVeiculosModule } from './tipos-veiculos/tipos-veiculos.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: `${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
      username: process.env.USER,
      password: process.env.PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TiposVeiculosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
