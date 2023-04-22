import { useContext, useEffect, useState } from "react";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import * as S from "./styled";
import { PlusIcon } from "@radix-ui/react-icons";
import { saveCategoria } from "../../services/Api";
import { Modal } from "../../components/Modal";

export const Configuracao = () => {
  const { setHeaderState, setTitleState } = useContext(HeaderContext);
  const [openModalState, setOpenModalState] = useState(false);
  const [textContentModalState, setContentModalState] = useState("");
  const [modalErrorState, setModalErrorState] = useState(false);
  const [titleModalState, setTitleModalState] = useState("");
  const [categoria, setCategoria] = useState("");

  const configHeader = {
    btnConfig: false,
    btnSave: false,
    btnDelete: false,
    btnBack: true,
    btnEditar: false,
  };

  //FUNCAO DO OK DO MODAL
  const confirmModal =()=>{
    setOpenModalState(false);
  }

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

    setOpenModalState(true);
  };

  //CHAMA A FUNCAO DE CADASTRO DE CATEGORIA DA API
  const cadCategoria = async (categoria: string) => {

    if(categoria.trim()){
      try {
        const response = await saveCategoria(categoria);
        if (response.id > 0) {
          setCategoria("");
          customizeModal("AVISO", "Contato cadastrado com sucesso!",false);

        }
      } catch (error) {
        console.log(error);
        customizeModal("ERRO", `Erro ao cadastrar o Contato! - ${error}`, true);
      }
    }else{
      customizeModal("ERROR","Digite o nome da Categoria!",true);
    }
    
  };

  useEffect(() => {
    setHeaderState(configHeader);
    setTitleState({ title: "CONFIGURAÇÕES" });
  }, []);

  return (
    <Main>
          <Modal
            isOpen={openModalState}
            onConfirm={confirmModal}
            typeErrorModal={modalErrorState}
            titleModal={titleModalState}
            textContentModal={textContentModalState}
          />
          
      <S.BoxDarkTheme>
        <S.LabelDarkTheme>
          Ativar Modo Dark
          <S.CheckDarkMode />
          <span className="checkBox"></span>
        </S.LabelDarkTheme>
      </S.BoxDarkTheme>

      <S.BoxCadCategoria>
        <S.TitleCadCategoria>Cadastrar nova categoria</S.TitleCadCategoria>
        <S.BoxInpCadCategoria>
          <S.InpCadCategoria
            value={categoria}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategoria(e.target.value) }
            placeholder="Nova Categoria"
          />
          <S.BtnCadCategoria onClick={() => cadCategoria(categoria)}>
            <PlusIcon width={20} height={20} color="#FFF" />
          </S.BtnCadCategoria>
        </S.BoxInpCadCategoria>
      </S.BoxCadCategoria>
    </Main>
  );
};
