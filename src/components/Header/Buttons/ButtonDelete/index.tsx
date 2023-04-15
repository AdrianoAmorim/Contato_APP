import { ReactNode, useContext, useState } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled";
import { deleteContact } from "../../../../services/Api";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../../../Modal";

interface ButtonProps {
  children: ReactNode;
  show?: boolean;
  bgcolor?: string;
}

export const ButtonDelete = ({ children, show, bgcolor }: ButtonProps) => {
  const { dataContact, resetDataContext } = useContext(ContactContext);
  const { setLoaderState } = useContext(HeaderContext);
  const [openModalState, setOpenModalState] = useState(false);
  const [textContentModalState, setContentModalState] = useState("");
  const [titleModalState, setTitleModalState] = useState("");
  const [modalErrorState, setModalErrorState] = useState(false);
  const navigate = useNavigate();

  //FUNCAO AO CLICAR NO BOTAO (OK) DO MODAL
  const closeModal = () => {
    setLoaderState(false);
    setOpenModalState(false);
    navigate("/");
  };

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

  const delContact = async (id: number) => {
    setLoaderState(true);
    try {
      const response = await deleteContact(id);
      if (response.id > 0) {
        openModal("AVISO","Contato deletado com Sucesso");
        resetDataContext();
      }
    } catch (error) {
        console.log(error);
        openModal("ERRO",`Houve um erro ao deletar o contato: -${error}`,true);
    }
  };

  return (
    <>
      <Modal
        isOpen={openModalState}
        titleModal={titleModalState}
        textContentModal={textContentModalState}
        onClose={closeModal}
        typeErrorModal={modalErrorState}
      />

      {show && (
        <S.Button bgcolor={bgcolor} onClick={() => delContact(dataContact.id)}>
          {children}
        </S.Button>
      )}
    </>
  );
};
