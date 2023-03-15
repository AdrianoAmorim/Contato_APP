import {useContext } from 'react';
import * as S from './styled';
import { GearIcon, CheckCircledIcon, CrossCircledIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from './Button';
import { ButtonHeaderContext } from '../../contexts/ButtonHeaderContext'; 


export const Header = () => {
    const {buttonsState} = useContext(ButtonHeaderContext);
    return (

        <S.ToolbarRoot asChild>
            <header>
                <S.TitleHeader>
                    MEUS CONTATOS
                </S.TitleHeader>

                <S.BoxButtons>

                    <Button show={buttonsState.btnBack}>
                        <ThickArrowLeftIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={buttonsState.btnDelete} bgColor="--bg-danger">
                        <CrossCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={buttonsState.btnSave}>
                        <CheckCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={buttonsState.btnConfig}>
                        <GearIcon color='#fff' width={22} height={22} />
                    </Button>

                </S.BoxButtons>
            </header>
        </S.ToolbarRoot>
    )
}