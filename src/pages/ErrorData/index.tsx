import { useNavigate, useParams } from "react-router-dom";
import imgError from "../../assets/img/img_dataError.png";
import * as S from "./styled";

type ErrorDataType = {
  textError: string;
  textLinkExit: string;
};

export const ErrorData = ({
  textError,
  textLinkExit
}: ErrorDataType) => {
 const {id} = useParams();

  const handleExitErrorData = () => {
    console.log("oi")
    location.reload();
  };

  return (
    <S.BoxContainer>
      <S.BoxImg>
        <img src={imgError} alt="Imagem de Error sem dados" />
      </S.BoxImg>
      <S.BoxText>
        <span>{textError}  {id}</span>
      </S.BoxText>
      <S.BoxOptionExit>
        <S.LinkExit onClick={handleExitErrorData}>{textLinkExit}</S.LinkExit>
      </S.BoxOptionExit>
    </S.BoxContainer>
  );
};
