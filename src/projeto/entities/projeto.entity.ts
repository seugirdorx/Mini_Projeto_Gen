import { IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { GrupoPi } from "../../grupoPi/entities/grupoPi.entity"
import { ApiProperty } from "@nestjs/swagger";


@Entity({ name: "tb_projeto"})
export class Projeto {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nomeProjeto: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    @ApiProperty()
    logoProjeto: string

    @IsNotEmpty()
    @Column({ length: 5000, nullable: false })
    @ApiProperty()
    linkProjeto: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    pitProjeto: string

    @ApiProperty({type:() => GrupoPi})
    @ManyToOne(() => GrupoPi, (grupoPi) => grupoPi.projeto, {
        onDelete: "CASCADE"
    })
    grupoPi: GrupoPi[]

    

}