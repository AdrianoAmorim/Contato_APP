import { useContext } from 'react';
import * as S from './styled';
import { GearIcon, CheckCircledIcon, CrossCircledIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from './Button';
import {  HeaderContext } from '../../contexts/HeaderContext';
import { Link } from 'react-router-dom';


export const Header = () => {
    const { headerState } = useContext(HeaderContext);

    return (

        <S.Header>
            
                <S.TitleHeader>
                   {headerState.title}
                </S.TitleHeader>

                <S.BoxButtons>

                    <Link to={`/`}>
                        <Button show={headerState.btnBack}>
                            <ThickArrowLeftIcon color='#fff' width={22} height={22} />
                        </Button>
                    </Link>
                    <Button show={headerState.btnDelete} bgcolor="--bg-danger">
                        <CrossCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={headerState.btnSave}>
                        <CheckCircledIcon color='#fff' width={22} height={22} />
                    </Button>
                    <Button show={headerState.btnConfig}>
                        <GearIcon color='#fff' width={22} height={22} />
                    </Button>

                </S.BoxButtons>
           
        </S.Header>
    )
}