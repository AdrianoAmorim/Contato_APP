import { ReactNode, useContext } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled";
import { saveContact, updateContact } from "../../../../services/Api";
import { ContactType } from "../../../../types/ContactType";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  show?: boolean;
  bgcolor?: string;
}

export const ButtonSave = ({ children, show, bgcolor }: ButtonProps) => {
  const { dataContact, resetDataContext } = useContext(ContactContext);
  const { setLoaderState } = useContext(HeaderContext);
  const navigate = useNavigate();

  //CADASTRA UM NOVO USUARIO
  const cadContact = async () => {
    setLoaderState(true);
    const validated = validateField(dataContact);
    if (validated) {
      try {
        const response = await saveContact(dataContact);
        if (response.id > 0) {
          alert("Cadastrado Com sucesso");
          resetDataContext();
          setLoaderState(false);
          navigate("/");
        } else {
          console.log(response);
          alert("Ops: Houve um Erro ao cadastrar o Usuario!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoaderState(false);
      alert("Campo Nome e Celular são Obrigatórios!");
    }
  };

  //ATUALIZA OS DADOS DO CONTATO
  const upContact = async (contact: ContactType) => {
    setLoaderState(true);

    const validated = validateField(dataContact);
    if (validated) {
      try {
        const response = await updateContact(contact);
        if (response.id > 0) {
          alert("Atualizado com Sucesso!");
          setLoaderState(false);
          resetDataContext();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoaderState(false);
      alert("Campo Nome e Celular são Obrigatórios!");
    }
  };

  //FAZ A VALIDAÇÃO DOS CAMPOS, SE ESTÃO VAZIOS
  const validateField = (contact: ContactType) => {
    if (contact["nome"] === "" || contact["celular"] === "") {
      return false;
    }
    return true;
  };

  //VERIFICA QUAL A ACAO QUE O BOTAO IRAR TOMAR (QUAL REQUISIÇÃO CHAMARA)
  const checkActionButton = () => {
    if (dataContact.id > 0) {
      upContact(dataContact);
    } else {
      cadContact();
    }
  };

  return (
    <>
      {show && (
        <S.Button bgcolor={bgcolor} onClick={checkActionButton}>
          {children}
        </S.Button>
      )}
    </>
  );
};
