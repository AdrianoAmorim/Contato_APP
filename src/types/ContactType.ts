export type ContactType = {
    [key:string]: string | number,
    id: number,
    nome: string,
    sobrenome: string,
    email: string,
    site: string,
    tel: string,
    telFixo: string,
    categoria: number
}
export type ContactHomeType = {
    id:number,
    nome:string
}