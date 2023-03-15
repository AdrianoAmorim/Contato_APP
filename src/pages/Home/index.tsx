
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import { ButtonHeaderContext } from "../../contexts/ButtonHeaderContext";
import * as S from "./styled";

export const Home = () => {
    const configButtons = {
        btnConfig: true,
        btnSave: true,
        btnDelete: false,
        btnBack: false
    }
    const { setButtonsState } = useContext(ButtonHeaderContext)
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

    const teste = ()=>{
        const configButtons2 = {
            btnConfig: true,
            btnSave: true,
            btnDelete: true,
            btnBack: true
        }
        setButtonsState(configButtons2)
    }

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
            <S.BtnCadastrar onClick={teste}>
                <PlusIcon width={20} height={20} color="#FFF" />
            </S.BtnCadastrar>
        </S.Main>
    )
}