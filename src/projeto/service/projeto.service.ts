import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, ILike, DeleteResult } from "typeorm";
import { Projeto } from "../entities/Projeto.entity";

@Injectable()
export class ProjetoService {
    constructor(@InjectRepository(Projeto) private projetoRepository: Repository<Projeto>) {}

    async findAll(): Promise<Projeto[]> {
        return await this.projetoRepository.find({
        })
    }

    async findById(id: number): Promise<Projeto> {
        let projeto = await this.projetoRepository.findOne({
            where: {
                id
            },
        })

        if(!projeto)
            throw new HttpException('Projeto não encontrada', HttpStatus.NOT_FOUND)

        return projeto
    }

    async findByNome(nomeProjeto: string): Promise<Projeto[]> {
        return await this.projetoRepository.find({
            where: {
                nomeProjeto: ILike(`%${nomeProjeto}%`)
            }
        })
    }


    async create(projeto: Projeto): Promise<Projeto> {
        return await this.projetoRepository.save(projeto)
    }

    async update(projeto: Projeto): Promise<Projeto> {
        let buscarProjeto = await this.findById(projeto.id)

        if(!buscarProjeto || !projeto.id) 
            throw new HttpException('Projeto não existe', HttpStatus.NOT_FOUND)
        
        return await this.projetoRepository.save(projeto)
    }

    async delete (id: number): Promise<DeleteResult> {
        let buscarProjeto = await this.findById(id)

        if(!buscarProjeto)
            throw new HttpException('Projeto não encontrada', HttpStatus.NOT_FOUND)

        return await this.projetoRepository.delete(id)
    }
}