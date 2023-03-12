import * as S from './styled'

export const Header = ()=>{

    return(

        <S.ToolbarRoot asChild>
        <header>
            <S.TitleHeader>
                MEUS CONTATOS
            </S.TitleHeader>
            <S.BoxButtons>
                <S.ToolbarButton>
                    <S.VoltarIcon />
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <S.DeletarIcon />
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <S.SaveIcon />
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <S.ConfigIcon />
                </S.ToolbarButton>
            </S.BoxButtons>
        </header>
    </S.ToolbarRoot>
    )
}