import * as S from './styled'
import { GearIcon, CheckCircledIcon, CrossCircledIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons"
export const Header = ()=>{

    return(

        <S.ToolbarRoot asChild>
        <header>
            <S.TitleHeader>
                MEUS CONTATOS
            </S.TitleHeader>
            <S.BoxButtons>
                <S.ToolbarButton>
                    <ThickArrowLeftIcon color='#fff' width={22} height={22} />
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <CrossCircledIcon color='#fff' width={22} height={22}/>
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <CheckCircledIcon color='#fff' width={22} height={22}/>
                </S.ToolbarButton>
                <S.ToolbarButton>
                    <GearIcon color='#fff' width={22} height={22}/>
                </S.ToolbarButton>
            </S.BoxButtons>
        </header>
    </S.ToolbarRoot>
    )
}