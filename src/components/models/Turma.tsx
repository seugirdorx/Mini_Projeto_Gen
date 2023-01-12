import GrupoPi from "./modelgrupo/GrupoPi";


interface Turma {
    id: number
    descricao: string,
    isAtivo: boolean,
    grupoPi?: GrupoPi | null
}

export default Turma;