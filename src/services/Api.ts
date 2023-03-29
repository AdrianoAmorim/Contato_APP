import { ContactType } from "../types/ContactType";

//SIMULA OS CONTATOS CADASTRADOS NO BD
const contacts: ContactType[] = [
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


//SIMULA A CONSULTA E RETORNA TODOS OS CONTATOS CADASTRO
export const getContacts = () => {
    return contacts;
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

