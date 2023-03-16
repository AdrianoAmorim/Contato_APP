import { PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect } from "react";
import { Main } from "../../components/MainComponent";
import { HeaderContext } from "../../contexts/HeaderContext";
import * as S from './styled';


export const Cadastro = () => {
    const { setHeaderState } = useContext(HeaderContext);
    const configButtons = {
        btnConfig: false, btnSave: true, btnDelete: false, btnBack: true, title: "Novo Contato"
    };
    //Seta na primeira montagem do component os botoes do header 
    useEffect(() => {
        setHeaderState(configButtons);
    }, [])


    return (

        <Main>
            <S.FormCad>
                <S.BoxInpCad>
                    <S.InpCad type="text" name="nome" placeholder="Nome" />
                    <S.InpCad type="text" name="sobrenome" placeholder="Sobrenome" />
                </S.BoxInpCad>

                <S.BoxInpCad>
                    <S.InpCad type="text" name="site" placeholder="Site" />
                    <S.InpCad type="email" name="email" placeholder="E-mail" />
                </S.BoxInpCad>

                <S.BoxInpCad>

                    <S.BoxInpCad style={{marginTop:'0',justifyContent:"end"}}>
                        <S.ButtonAddTel>
                            <PlusIcon height={20} width={20} color="#fff" />
                        </S.ButtonAddTel>
                        <S.InpCad type="tel" name="tel" placeholder="Telefone" />
                    </S.BoxInpCad>
                    <S.SlcCad name="categoria">
                        <option value="1">Futebol</option>
                        <option value="1" >Trabalho</option>
                        <option value="2">Família</option>
                    </S.SlcCad>

                </S.BoxInpCad>
            </S.FormCad>


        </Main >


    )
}