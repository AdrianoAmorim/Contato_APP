import { ReactNode, useContext, useEffect, useState } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled";
import { saveContact, updateContact } from "../../../../services/Api";
import { ContactType } from "../../../../types/ContactType";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../Modal";

interface ButtonProps {
  children: ReactNode;
  show?: boolean;
  bgcolor?: string;
}

export const ButtonSave = ({ children, show, bgcolor }: ButtonProps) => {
  const { dataContact, resetDataContext } = useContext(ContactContext);
  const { setLoaderState } = useContext(HeaderContext);
  const [openModalState, setOpenModalState] = useState(false);
  const [textContentModalState, setContentModalState] = useState("");
  const [modalErrorState, setModalErrorState] = useState(false);
  const [titleModalState, setTitleModalState] = useState("");
  const navigate = useNavigate();

  //FUNCAO AO ABRIR O MODAL CUSTOMIZA TITULO E MENSAGEM DO CONTEUDO DO MODAL
  const openModal = (title: string, textContent: string, typeErrorModal?: boolean) => {
    setContentModalState(textContent);
    setTitleModalState(title);
    if (typeErrorModal) {
      setModalErrorState(true);
    } else {
      setModalErrorState(false);
    }
    setOpenModalState(true);
  };

  
  //FUNCAO AO CLICAR NO BOTAO (OK) DO MODAL
  const confirmModal = () => {
    setLoaderState(false);
    setOpenModalState(false);
    if (validateField(dataContact)) {
      resetDataContext();
      navigate("/");
    }
  };

  //CADASTRA UM NOVO USUARIO
  const cadContact = async () => {
    setLoaderState(true);
    const validated = validateField(dataContact);
    if (validated) {
      try {
        const response = await saveContact(dataContact);
        if (response.id > 0) {
          openModal("AVISO", "Contato cadastrado com sucesso!");
        }
      } catch (error) {
        console.log(error);
        openModal("ERRO", `Erro ao cadastrar o Contato! - ${error}`, true);
      }
    } else {
      openModal("ERRO", "Os Campos NOME e CELULAR são obrigatórios!", true);
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
          openModal("AVISO", "Contato atualizado com sucesso!!");
        }
      } catch (error) {
        console.log(error);
        openModal("ERRO", `Erro ao atualizar o Contato! - ${error}`, true);
      }
    } else {
      openModal("ERRO", "Campo NOME e CELULAR são obrigatórios!", true);
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
      <Modal
        isOpen={openModalState}
        onConfirm={confirmModal}
        typeErrorModal={modalErrorState} 
        titleModal= {titleModalState}
        textContentModal={textContentModalState}
      />

      {show && (
        <S.Button bgcolor={bgcolor} onClick={checkActionButton}>
          {children}
        </S.Button>
      )}
    </>
  );
};
