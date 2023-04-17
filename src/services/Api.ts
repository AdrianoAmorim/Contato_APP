import axios from "axios";
import { ContactHomeType, ContactType } from "../types/ContactType";
import { CategoryType } from "../types/CategoryType";

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

//BUSCA UM CONTATO COM O ID PASSADO NO PARAMETRO
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
export const saveContact = async (contact: ContactType)=> {
    try {
        const response = await axios.post(`${url_api}/cadContato`, contact);
        return response.data;
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}

//ATUALIZA OS DADOS DO CONTATO
export const updateContact = async(contact:ContactType)=>{
    try {
        const response = await axios.put(`${url_api}/updateContato`,contact);
        return response.data
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}

//DELETA O CONTATO SELECIONADO
export const deleteContact = async(id:number)=>{
    try {
        const response = await axios.delete(`${url_api}/deleteContato/${id}`);
        return response.data;
    } catch (error) {
        if(error instanceof Error){
            return error
        }else{
            return String(error);
        }
    }
}
