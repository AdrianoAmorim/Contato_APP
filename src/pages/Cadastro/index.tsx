import { PlusIcon } from "@radix-ui/react-icons";
import avatar from "../../assets/img/avatarCad.png"
import { FormEvent, useContext, useEffect} from "react";
import { Main } from "../../components/MainComponent";
import * as S from './styled';
import { HeaderContext } from "../../contexts/HeaderContext";
import { ContactContext } from "../../contexts/ContactContext";


export const Cadastro = () => {
    const { setHeaderState } = useContext(HeaderContext);
    const { setNome,setSobreNome,setEmail,setTel,setSite,setCategoria,dataContact} = useContext(ContactContext);
   
    const configHeader = {
        btnConfig: false, btnSave: true, btnDelete: false, btnBack: true,btnEditar:false, title: "Novo Contato"
    };
    //Seta na primeira montagem do component os botoes do header 
    useEffect(() => {
        setHeaderState(configHeader);
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
                    <S.InpCad type="text" name="site" placeholder="Site" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setSite(e.target.value)} />
                    <S.InpCad type="email" name="email" placeholder="E-mail" onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </S.BoxInpCad>

                <S.BoxInpCad>

                    <S.BoxInpCad >
                        <S.InpCad type="tel" name="tel" placeholder="Telefone" onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value)} />
                        <S.ButtonAddTel>
                            <PlusIcon height={20} width={20} color="var(--bg-button)" />
                        </S.ButtonAddTel>
                    </S.BoxInpCad>
                    <S.SlcCad name="categoria" onChange={
                        (e: React.ChangeEvent<HTMLSelectElement>) => setCategoria(parseInt(e.target.value))
                    }>
                        <option value="1" defaultChecked>Futebol</option>
                        <option value="2" >Trabalho</option>
                        <option value="3">Família</option>
                    </S.SlcCad>

                </S.BoxInpCad>
            </S.FormCad>


        </Main >


    )
}