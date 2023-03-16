
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonHeaderContext } from "../../contexts/ButtonHeaderContext";
import * as S from "./styled";

export const Home = () => {
    const { setButtonsState } = useContext(ButtonHeaderContext);
    const configButtons = {
        btnConfig: true,
        btnSave: false,
        btnDelete: false,
        btnBack: false
    };
    
    const [nameContacts, setnameContacts] = useState(
        [
            { name: 'Adriano' },
            { name: 'Cristiane Amorim' },
            { name: 'Alice Sorio Amorim' },
            { name: 'Papai' },
            { name: 'Renato' },
            { name: 'Alice Sorio Amorim' },
            { name: 'Alice Sorio Amorim' },
            { name: 'Alice Sorio Amorim' },
            { name: 'Alice Sorio Amorim' },
            { name: 'Alice Sorio Amorim' },
        ]);

    useEffect(() => {
        setButtonsState(configButtons);
    }, [])

    return (
        <S.Main>
            <S.BoxInpSearch>
                <S.InpSearch type="search" placeholder="Buscar Contatos" />
                <MagnifyingGlassIcon id="iconSearch" color="var(--bg-header)" width={22} height={22} />
            </S.BoxInpSearch>

            <S.BoxCardContacts>
                {
                    nameContacts.map((contato, i) =>
                        <S.CardContacts key={i}>
                            <PersonIcon className="iconContact" color="var(--bg-header)" width={20} height={20} />
                            <S.NameContacts>
                                {contato.name}
                            </S.NameContacts>
                        </S.CardContacts>

                    )
                }
            </S.BoxCardContacts>

            <Link to={`/cadastrar`}>
                <S.BtnCadastrar>
                    <PlusIcon width={20} height={20} color="#FFF" />
                </S.BtnCadastrar>
            </Link>
        </S.Main>
    )
}