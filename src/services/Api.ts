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

