import { IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { GrupoPi } from "../../grupoPi/entities/grupoPi.entity"

@Entity({ name: "tb_turma"})
export class Turma {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    descricao: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    isAtivo: boolean

    @OneToMany(() => GrupoPi, (grupoPi) => grupoPi.turmaId)
    grupoPi: GrupoPi[]
}   
