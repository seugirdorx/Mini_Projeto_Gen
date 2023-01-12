import { IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { GrupoPi } from "../../grupoPi/entities/grupoPi.entity"
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_turma"})
export class Turma {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    descricao: string

    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    isAtivo: boolean

    @ApiProperty({type:() => GrupoPi})
    @OneToMany(() => GrupoPi, (grupoPi) => grupoPi.turma)
    grupoPi: GrupoPi[]
}   
