import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { GrupoPi } from "../entities/grupoPi.entity"
import { GrupoPiService } from "../service/grupoPi.service"
import { ApiTags } from "@nestjs/swagger"


@ApiTags('Grupos')
@Controller('/grupos')
export class GrupoPiController {
    constructor(private readonly grupoPiService: GrupoPiService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<GrupoPi[]> {
        return this.grupoPiService.findAll()
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number ): Promise<GrupoPi> {
        return this.grupoPiService.findById(id)
    }

    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() grupoPi: GrupoPi): Promise<GrupoPi> {
        return this.grupoPiService.create(grupoPi)
    }

    @Put ()
    @HttpCode(HttpStatus.OK)
    update(@Body() grupoPi: GrupoPi): Promise<GrupoPi> {
        return this.grupoPiService.update(grupoPi)
    }

    @Delete ('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.grupoPiService.delete(id)
    }

}