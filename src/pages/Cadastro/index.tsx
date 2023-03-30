import avatar from "../../assets/img/avatarCad.png"
import { FormEvent, useContext, useEffect } from "react";
import { Main } from "../../components/MainComponent";
import * as S from './styled';
import { HeaderContext } from "../../contexts/HeaderContext";
import { ContactContext } from "../../contexts/ContactContext";
import ReactLoading from 'react-loading';

export const Cadastro = () => {
    const { setHeaderState, setTitleState } = useContext(HeaderContext);
    const { setNome, setSobreNome, setEmail, setTel,setTelFixo, setSite, setCategoria, dataContact } = useContext(ContactContext);

    const configHeader = {
        btnConfig: false, btnSave: true, btnDelete: false, btnBack: true, btnEditar: false
    };
    //Seta na primeira montagem do component os botoes do header 
    useEffect(() => {
        setHeaderState(configHeader);
        if (dataContact.id) {
            setTitleState({ title: "EDITAR" })
        } else {
            setTitleState({ title: "NOVO CONTATO" })
        }
    }, [])


    //BLOQUEIO O EVENTO PADRAO DE SUBMIT DO FORMULARIO
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (

        <Main>
            <S.BoxAvatar>
                <img src={avatar} />
            </S.BoxAvatar>

            <S.FormCad onSubmit={handleSubmit}>
                <S.BoxInpCad>
                    <S.InpCad type="text" value={dataContact.nome} name="nome" placeholder="Nome" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
                    <S.InpCad type="text" value={dataContact.sobrenome} name="sobrenome" placeholder="Sobrenome" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setSobreNome(e.target.value)} />

                </S.BoxInpCad>

                <S.BoxInpCad>
                    <S.InpCad type="text" value={dataContact.site} name="site" placeholder="Site" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setSite(e.target.value)} />
                    <S.InpCad type="email" value={dataContact.email} name="email" placeholder="E-mail" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </S.BoxInpCad>

                <S.BoxInpCad>
                    <S.InpCadMask type="tel" name="telCelular" mask={"(99) 99999-9999"} maskChar="_" value={dataContact.tel} placeholder="Celular" onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} />
        
                    <S.InpCadMask type="tel"  name="telFixo" mask={"(99) 9999-9999"} maskChar="_" value={dataContact.telFixo} placeholder="Fixo"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelFixo(e.target.value)} />
                </S.BoxInpCad>

                <S.BoxInpCad>
                <S.SlcCad width="19.7rem" name="categoria" value={dataContact.categoria} onChange={
                        (e: React.ChangeEvent<HTMLSelectElement>) => setCategoria(parseInt(e.target.value))}>
                        <option value="1">Futebol</option>
                        <option value="2">Trabalho</option>
                        <option value="3">Família</option>
                    </S.SlcCad>
                
                </S.BoxInpCad>
            </S.FormCad>


        </Main >


    )
}