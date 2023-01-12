import { IsNotEmpty } from "class-validator"
import { Projeto } from "src/projeto/entities/projeto.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Turma } from "../../turma/entities/turma.entity"
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_grupoPi"})
export class GrupoPi {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 200, nullable: false })
    @ApiProperty()
    numeroGrupo: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    @ApiProperty()
    maisInfos: string

    @ApiProperty({type:() => Turma})
    @ManyToOne(() => Turma, (turma) => turma.grupoPi, {
        onDelete: "CASCADE"
    })
    turma: Turma[]

    @ApiProperty({type:() => Projeto})
    @OneToMany (() => Projeto, (projeto) => projeto.grupoPi)
    projeto: Projeto[]

}