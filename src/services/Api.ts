import axios from "axios";
import { ContactHomeType, ContactType } from "../types/ContactType";
import { CategoryType } from "../types/category";

const url_api = "http://localhost:4041";

//RETORNA TODOS OS CONTATOS SALVOS
export const getAllContacts = async (): Promise<ContactHomeType[] |any> => {
    try {
        const response = await axios.get<ContactHomeType[]>(`${url_api}/contatos`)
        .catch((error)=>{
            return error
        })
        return response.data;

    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }


}

//SIMULA A CONSULTA DE UM CONTATO, passando o ID POR PARAMETRO
export const getContact = async (id: number): Promise<ContactType | any> => {
    try {
        const response = await axios.get<ContactType>(`${url_api}/contato/${id}`);
        return response.data
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}

//SALVA UM NOVO CONTATO
export const saveContact = async (contact: ContactType):Promise<ContactType| any> => {
    try {
        const response = await axios.post<ContactType>(`${url_api}/cadContato`, contact);
        return response.data;
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}

//RETORNA TODAS AS CATEGORIAS CADASTRADAS
export const getAllCategories = async (): Promise<CategoryType[] | any> => {
    try {
        const response = await axios.get<CategoryType[]>(`${url_api}/categorias`);
        return response.data
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}
