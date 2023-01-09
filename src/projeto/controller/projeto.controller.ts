import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { Projeto } from "../entities/Projeto.entity"
import { ProjetoService} from "../service/Projeto.service"



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

    @Get ('/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nomeGrupo') nomeGrupo: string ): Promise<Projeto[]> {
        return this.projetoService.findByNome(nomeGrupo)
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