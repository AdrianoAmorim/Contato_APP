import { useContext, useEffect } from "react";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import * as S from "./styled";
import { PlusIcon } from "@radix-ui/react-icons";

export const Configuracao = () => {
  const { setHeaderState, setTitleState } = useContext(HeaderContext);

  const configHeader = {
    btnConfig: false,
    btnSave: false,
    btnDelete: false,
    btnBack: true,
    btnEditar: false,
  };

  useEffect(() => {
    setHeaderState(configHeader);
    setTitleState({ title: "Configuraçoes" });
  }, []);
  return (
    <Main>
      <S.BoxDarkTheme>
        <S.LabelDarkTheme>
          Ativar Modo Dark
          <S.CheckDarkMode />
          <span className="checkBox"></span>
        </S.LabelDarkTheme>
      </S.BoxDarkTheme>

      <S.BoxCadCategoria>
        <S.TitleCadCategoria>Cadastar nova categoria</S.TitleCadCategoria>
        <S.BoxInpCadCategoria>
          <S.InpCadCategoria placeholder="Nova Categoria" />
          <S.BtnCadCategoria>
          <PlusIcon width={20} height={20} color="#FFF" />
          </S.BtnCadCategoria>
        </S.BoxInpCadCategoria>
      </S.BoxCadCategoria>
    </Main>
  );
};
