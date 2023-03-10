
import * as H from "../../components/Header/styled"
import * as S from "./styled"



export const Home = () => {
    return (
        <>
            <H.ToolbarRoot asChild>
                <header>
                    <H.TitleHeader>
                        MEUS CONTATOS
                    </H.TitleHeader>
                    <H.BoxButtons>
                        <H.ToolbarButton>
                            <H.VoltarIcon />
                        </H.ToolbarButton>
                        <H.ToolbarButton>
                            <H.DeletarIcon />
                        </H.ToolbarButton>
                        <H.ToolbarButton>
                            <H.SaveIcon />
                        </H.ToolbarButton>
                        <H.ToolbarButton>
                            <H.ConfigIcon />
                        </H.ToolbarButton>
                    </H.BoxButtons>
                </header>
            </H.ToolbarRoot>

            <S.Main>
                <S.BoxListContacts>

                    <S.ViewportListContacts>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                            <span>OI</span>
                        </div>
                    </S.ViewportListContacts>

                    <S.ScrollbarListContacts orientation="horizontal">
                        <S.ThumbListContacts />
                    </S.ScrollbarListContacts>

                    <S.ScrollbarListContacts orientation="vertical">
                        <S.ThumbListContacts />
                    </S.ScrollbarListContacts>

                    <S.CornerListContacts />
                </S.BoxListContacts>

            </S.Main>
        </>
    )
}