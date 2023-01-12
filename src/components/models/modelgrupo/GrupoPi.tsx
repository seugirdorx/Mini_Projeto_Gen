import Projeto from "../modelprojeto/Projeto";
import Turma from "../Turma";

interface GrupoPi {
    id: number
    numeroGrupo: string
    maisInfos: string
    turma?: Turma | null,
    projeto?: Projeto | null
}

export default GrupoPi;