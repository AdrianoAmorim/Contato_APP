import imgError from "../../assets/img/img_dataError.png"
import * as S from "./styled"

export const ErrorData = ()=>{

    return(
        <S.BoxContainer>
            <S.BoxImg>
                <img src={imgError} alt="Imagem de Error sem dados"/>
            </S.BoxImg>
            <S.BoxText>
                <span>ERROR</span>
                <span>Dados não Encontrado</span>
            </S.BoxText>
        </S.BoxContainer>
    )
}