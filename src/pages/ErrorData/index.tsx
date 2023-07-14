import { useNavigate } from "react-router-dom";
import imgError from "../../assets/img/img_dataError.png";
import * as S from "./styled";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";

type ErrorDataType = {
  textError: string;
  textLinkExit: string;
  exitError: ()=> void;
};

export const ErrorData = ({textError,textLinkExit,exitError}: ErrorDataType) => {
  const {setHeaderState} = useContext(HeaderContext);
 //CONFIGURA OS BOTOES DO HEADER
 const configHeader = {
  btnConfig: false,
  btnSave: false,
  btnDelete: false,
  btnBack: true,
  btnEditar: false,
};
useEffect(()=>{
setHeaderState(configHeader);
},[])

  return (
    <S.BoxContainer>
      <S.BoxImg>
        <img src={imgError} alt="Imagem de Error sem dados" />
      </S.BoxImg>
      <S.BoxText>
        <span>{textError}</span>
      </S.BoxText>
      <S.BoxOptionExit>
        <S.LinkExit onClick={exitError}>{textLinkExit}</S.LinkExit>
      </S.BoxOptionExit>
    </S.BoxContainer>
  );
};
