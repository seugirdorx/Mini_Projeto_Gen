import { IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Turma } from "../../turma/entities/turma.entity"

@Entity({ name: "tb_grupoPi"})
export class GrupoPi {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 2, nullable: false })
    numeroGrupo: number

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    maisInfos: string

    @IsNotEmpty()
    @Column({ length: 2, nullable: false })
    turmaId: number

    @OneToOne(() => Turma, (turma) => turma.numeroGrupoId)
    turma: Turma[]

}