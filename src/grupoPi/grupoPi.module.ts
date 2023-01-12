import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GrupoPiController } from "./controller/grupoPi.controller";
import { GrupoPi } from "./entities/grupoPi.entity";
import { GrupoPiService } from "./service/grupoPi.service";


@Module ({
    imports: [TypeOrmModule.forFeature([GrupoPi])],
    providers: [GrupoPiService],
    controllers: [GrupoPiController],
    exports: [TypeOrmModule]
})

export class GrupoPiModule {}