import { useContext } from 'react';
import * as S from './styled';
import { GearIcon, CheckCircledIcon, CrossCircledIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";
import {  HeaderContext } from '../../contexts/HeaderContext';
import { Link } from 'react-router-dom';
import { ButtonSave } from './Buttons/ButtonSave'
import { ButtonDelete } from './Buttons/ButtonDelete'
import { ButtonConfig } from './Buttons/ButtonConfig';
import { ButtonBack } from './Buttons/ButtonBack';


export const Header = () => {
    const { headerState } = useContext(HeaderContext);

    return (

        <S.Header>
            
                <S.TitleHeader>
                   {headerState.title}
                </S.TitleHeader>

                <S.BoxButtons>

                    <Link to={`/`}>
                        <ButtonBack show={headerState.btnBack}>
                            <ThickArrowLeftIcon color='#fff' width={22} height={22} />
                        </ButtonBack>
                    </Link>
                    <ButtonDelete show={headerState.btnDelete} bgcolor="--bg-danger">
                        <CrossCircledIcon color='#fff' width={22} height={22} />
                    </ButtonDelete>
                    <ButtonSave show={headerState.btnSave}>
                        <CheckCircledIcon color='#fff' width={22} height={22} />
                    </ButtonSave>
                    <ButtonConfig show={headerState.btnConfig}>
                        <GearIcon color='#fff' width={22} height={22} />
                    </ButtonConfig>

                </S.BoxButtons>
           
        </S.Header>
    )
}