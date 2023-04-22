import * as S from "./styled";
import imgNotFound from "../../assets/img/img_rota_notFound.png";
import { Main } from "../../components/MainComponent";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";

export const NotFound = () => {
  const { setHeaderState } = useContext(HeaderContext);
  const configHeader = {
    btnConfig: false,
    btnSave: false,
    btnDelete: false,
    btnBack: true,
    btnEditar: false,
  };
  
  useEffect(() => {
    setHeaderState(configHeader);
  }, []);

  return (
    <Main>
      <S.BoxImgNotFound>
        <img src={imgNotFound} alt="Imagem NotFound" />
      </S.BoxImgNotFound>

      <S.TextNotFound>Página não Encontrada!</S.TextNotFound>
    </Main>
  );
};
