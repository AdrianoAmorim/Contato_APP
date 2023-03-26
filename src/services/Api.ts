import { ContactType } from "../types/ContactType";

export interface IListContact {
    contact: ContactType[];
}

const contacts = {
    contact: [
        {
            id: 1,
            nome: "Adriano",
            sobrenome: "Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 2,
            nome: "Alice",
            sobrenome: "Sório Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 3,
            nome: "Adriano",
            sobrenome: "Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 4,
            nome: "Alice",
            sobrenome: "Sório Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 5,
            nome: "Adriano",
            sobrenome: "Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 6,
            nome: "Alice",
            sobrenome: "Sório Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 7,
            nome: "Adriano",
            sobrenome: "Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 8,
            nome: "Alice",
            sobrenome: "Sório Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 9,
            nome: "Renato Pires",
            sobrenome: "Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        },
        {
            id: 10,
            nome: "Cristiane",
            sobrenome: "Sório Amorim",
            email: "teste@teste.com",
            site: "www.teste.com",
            tel: "2899999-9999",
            categoria: 2
        }
    ]
};


export const getContacts = () => {
    return contacts;
}

