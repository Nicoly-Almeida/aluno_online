import { Endereco } from "./Endereco"

export interface Aluno{
    id: number
    name: string
    cpf: string
    email: string
    anoNascimento: number
    endereco?: Endereco
}