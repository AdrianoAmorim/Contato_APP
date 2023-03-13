
import { MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/"
import * as S from "./styled"




export const Home = () => {
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

    return (
        <>

            <Header btnConfig={true} />

            <S.Main>
                <S.BoxInpSearch>
                    <S.InpSearch type="search" placeholder="Buscar Contatos"/>
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
            </S.Main>

            <S.BtnCadastrar>
                <PlusIcon width={20} height={20} color="#FFF" />
            </S.BtnCadastrar>
        </>
    )
}