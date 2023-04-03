import axios from "axios";
import { ContactHomeType, ContactType } from "../types/ContactType";

const url_api = "http://localhost:4041";

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
   
}

//SALVA UM NOVO CONTATO
export const saveContact = async (contact: ContactType) => {
    try {
        const response = await axios.post<ContactType>(`${url_api}/cadContato`,contact);
        return response.data;

    } catch (error) {
        return error as any
    }
}
