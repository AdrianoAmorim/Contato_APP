import { ReactNode, useContext, useState } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import * as S from "./styled";
import { deleteContact } from "../../../../services/Api";
import { HeaderContext } from "../../../../contexts/HeaderContext";
import { useNavigate } from "react-router-dom";
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
  const [controlBtnConfirmModal,setControlBtnConfirmModal] = useState(false);
  const [typeDeleteModalState, setTypeDeleteModalState] = useState(false);
  const navigate = useNavigate();

  //FUNCAO AO CLICAR NO BOTAO (OK) DO MODAL
  const confirmModal = () => {
    if(controlBtnConfirmModal){
      setOpenModalState(false);
    }else{
      delContact(dataContact.id);
    }
  };

  const cancelModal = () => {
    setOpenModalState(false);
  };

  //CUSTOMIZA O MODAL E ABRE ELE
  const customizeModal = (
    title: string,
    textContent: string,
    typeErrorModal?: boolean,
    typeDeleteModal?: boolean
  ) => {
    setContentModalState(textContent);
    setTitleModalState(title);
    if (typeErrorModal) {
      setModalErrorState(true);
    } else {
      setModalErrorState(false);
    }

    if (typeDeleteModal) {
      setTypeDeleteModalState(true);
    } else {
      setTypeDeleteModalState(false);
    }

    setOpenModalState(true);
  };

  //FUNCAO para abrir o modal e personalizar seu conteudo
  const openModal = () => {
    customizeModal(
      "AVISO",
      "DESEJA REALMENTE DELETAR ESTE CONTATO?",
      true,
      true
    );
  };

  //FUNÇÃO PARA DELETAR O CONTATO
  const delContact = async (id: number) => {
    setLoaderState(true);
    setOpenModalState(false);
    setControlBtnConfirmModal(false);
    try {
      const response = await deleteContact(id);
      if (response.id > 0) {
        setLoaderState(false);
        resetDataContext();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setControlBtnConfirmModal(true);
      customizeModal("ERRO","Houve um erro ao deletar o Contato!",true,false);
    }
  };

  return (
    <>
      <Modal
        isOpen={openModalState}
        titleModal={titleModalState}
        textContentModal={textContentModalState}
        onConfirm={confirmModal}
        onCancel={cancelModal}
        typeErrorModal={modalErrorState}
        typeDeleteModal={typeDeleteModalState}
      />

      {show && (
        <S.Button bgcolor={bgcolor} onClick={openModal}>
          {children}
        </S.Button>
      )}
    </>
  );
};
