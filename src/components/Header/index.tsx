import { useContext } from 'react';
import * as S from './styled';
import { GearIcon, CheckCircledIcon, ThickArrowLeftIcon, TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import {  HeaderContext } from '../../contexts/HeaderContext';
import { Link } from 'react-router-dom';
import { ButtonSave } from './Buttons/ButtonSave'
import { ButtonDelete } from './Buttons/ButtonDelete'
import { ButtonConfig } from './Buttons/ButtonConfig';
import { ButtonBack } from './Buttons/ButtonBack';
import { ButtonEditar } from './Buttons/ButtonEditar';


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
                        <TrashIcon color='#fff' width={22} height={22} />
                    </ButtonDelete>
                    <ButtonSave show={headerState.btnSave}>
                        <CheckCircledIcon color='#fff' width={22} height={22} />
                    </ButtonSave>
                    <ButtonEditar show={headerState.btnEditar}>
                        <Pencil2Icon color='#fff' width={22} height={22} />
                    </ButtonEditar>

                    <ButtonConfig show={headerState.btnConfig}>
                        <GearIcon color='#fff' width={22} height={22} />
                    </ButtonConfig>

                </S.BoxButtons>
           
        </S.Header>
    )
}