import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrupoPi } from './grupoPi/entities/grupoPi.entity';
import { Projeto } from './projeto/entities/projeto.entity';
import { Turma } from './turma/entities/turma.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [GrupoPi, Projeto, Turma],
      synchronize: true
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
