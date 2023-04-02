import axios, { AxiosResponse } from "axios";
import { ContactHomeType, ContactType } from "../types/ContactType";


const url_api = "http://localhost:4041";
//SIMULA OS CONTATOS CADASTRADOS NO BD
const contacts: ContactType[] = [
    {
        id: 1,
        nome: "Adriano",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 2
    },
    {
        id: 2,
        nome: "Alice",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 1
    },
    {
        id: 3,
        nome: "Cristiane",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 2
    },
    {
        id: 4,
        nome: "Dercy",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 3
    },
    {
        id: 5,
        nome: "Bianca",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 1
    },
    {
        id: 6,
        nome: "Roberta",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 2
    },
    {
        id: 7,
        nome: "Leli",
        sobrenome: "Amorim",
        email: "teste@teste.com",
        site: "www.teste.com",
        tel: "2899999-9999",
        telFixo: "289999-9999",
        categoria: 3
    },

]


//BUSCA TODOS OS CONTATOS SALVOS
export const getAllContacts = async (): Promise<ContactHomeType[]> => {
    try {
        const response = await axios.get<ContactHomeType[]>(`${url_api}/contatos`);
        return response.data;
    } catch (error) {
        return error as any
    }


}

//SIMULA A CONSULTA DE UM CONTATO
export const getContact = (id: number) => {
    const contact: ContactType = contacts.find((item) => {
        if (item.id === id) {
            return item;
        }
    })!;

    return contact;
}


export const saveContact = async (contact: ContactType) => {
    try {
        const response = await axios.post<ContactType>(`${url_api}/cadContato`,contact);
        return response.data;

    } catch (error) {
        console.log(error)
    }
}
