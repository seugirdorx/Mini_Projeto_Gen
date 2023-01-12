import GrupoPi from "../modelgrupo/GrupoPi"


interface Projeto {
    id: number
    nomeProjeto: string,
    logoProjeto: string,
    linkProjeto: string,
    pitProjeto: string,
    grupoPi?: GrupoPi | null
}

export default Projeto;