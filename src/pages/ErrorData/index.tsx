import imgError from "../../assets/img/img_dataError.png"
import * as S from "./styled"

type ErrorDataType = {
    textError:string
}

export const ErrorData = ({textError}:ErrorDataType)=>{

    return(
        <S.BoxContainer>
            <S.BoxImg>
                <img src={imgError} alt="Imagem de Error sem dados"/>
            </S.BoxImg>
            <S.BoxText>
                <span>ERROR</span>
                <span>{textError}</span>
            </S.BoxText>
        </S.BoxContainer>
    )
}