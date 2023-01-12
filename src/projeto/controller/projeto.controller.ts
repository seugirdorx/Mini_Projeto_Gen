import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Projeto } from "../entities/projeto.entity"
import { ProjetoService } from "../service/projeto.service"


@ApiTags('Projetos')
@Controller('/projetos')
export class ProjetoController {
    constructor(private readonly projetoService: ProjetoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Projeto[]> {
        return this.projetoService.findAll()
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number ): Promise<Projeto> {
        return this.projetoService.findById(id)
    }


    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() projeto: Projeto): Promise<Projeto> {
        return this.projetoService.create(projeto)
    }

    @Put ()
    @HttpCode(HttpStatus.OK)
    update(@Body() projeto: Projeto): Promise<Projeto> {
        return this.projetoService.update(projeto)
    }

    @Delete ('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.projetoService.delete(id)
    }

}