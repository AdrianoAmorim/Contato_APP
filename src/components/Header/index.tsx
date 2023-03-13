import * as S from './styled'
import { GearIcon, CheckCircledIcon, CrossCircledIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons"
import { useState } from 'react'
import { Button } from './Button';

interface HeaderProps {
    btnConfig?: boolean;
    btnSave?: boolean;
    btnCancel?: boolean;
    btnBack?: boolean;
}

export const Header = (props : HeaderProps) => {
    
    return (

        <S.ToolbarRoot asChild>
            <header>
                <S.TitleHeader>
                    MEUS CONTATOS
                </S.TitleHeader>

                <S.BoxButtons>

                    <Button show={props.btnBack}>
                        <ThickArrowLeftIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={props.btnCancel}>
                        <CrossCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={props.btnSave}>
                        <CheckCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={props.btnConfig}>
                        <GearIcon color='#fff' width={22} height={22} />
                    </Button>

                </S.BoxButtons>
            </header>
        </S.ToolbarRoot>
    )
}