import avatar from "../../assets/img/avatarCad.png";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Main } from "../../components/MainComponent";
import * as S from "./styled";
import { HeaderContext } from "../../contexts/HeaderContext";
import { ContactContext } from "../../contexts/ContactContext";
import ReactLoading from "react-loading";
import { getAllCategories } from "../../services/Api";
import { CategoryType } from "../../types/category";

export const Cadastro = () => {
  const [categoriaState, setCategoriaState] = useState<CategoryType[]>([]);
  const { setHeaderState, setTitleState, loaderState, setLoaderState } =
    useContext(HeaderContext);
  const {
    setNome,
    setSobreNome,
    setEmail,
    setCelular,
    setFixo,
    setSite,
    setCategoria,
    dataContact,
  } = useContext(ContactContext);

  const configHeader = {
    btnConfig: false,
    btnSave: true,
    btnDelete: false,
    btnBack: true,
    btnEditar: false,
  };
  //Seta na primeira montagem do component os botoes e verifica qual funcao do componente (editar ou cadastrar)
  useEffect(() => {
    setHeaderState(configHeader);
    if (dataContact.id) {
      setTitleState({ title: "EDITAR" });
    } else {
      setTitleState({ title: "NOVO CONTATO" });
    }
  }, []);

  //CARREGA O SELECT DE CATEGORIA DINAMICAMENTE
  useEffect(() => {
    const getCategory = async () => {
      setLoaderState(true);
      try {
        const response = await getAllCategories();
        if (response.aviso) {
          alert(response.msg);
        } else {
          setCategoriaState(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoaderState(false);
      }
    };
    getCategory();
  }, []);

  //REMOVE AS MASCARAS DOS CAMPOS DE TELEFONE
  const removeMaskTel = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "telCelular") {
      setCelular(e.target.value.replaceAll(/[^\d]/g, ""));
    } else {
      setFixo(e.target.value.replaceAll(/[^\d]/g, ""));
    }
  };

  //BLOQUEIO O EVENTO PADRAO DE SUBMIT DO FORMULARIO
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Main>
      {loaderState ? (
        <ReactLoading
          className="paddingLoad"
          type="spinningBubbles"
          height="50px"
          width="50px"
          color="var(--bg-button)"
        />
      ) : (
        <>
          <S.BoxAvatar>
            <img src={avatar} />
          </S.BoxAvatar>

          <S.FormCad onSubmit={handleSubmit}>
            <S.BoxInpCad>
              <S.InpCad
                type="text"
                value={dataContact.nome}
                name="nome"
                placeholder="Nome"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNome(e.target.value)
                }
              />
              <S.InpCad
                type="text"
                value={dataContact.sobrenome}
                name="sobrenome"
                placeholder="Sobrenome"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSobreNome(e.target.value)
                }
              />
            </S.BoxInpCad>

            <S.BoxInpCad>
              <S.InpCad
                type="text"
                value={dataContact.site}
                name="site"
                placeholder="Site"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSite(e.target.value)
                }
              />
              <S.InpCad
                type="email"
                value={dataContact.email}
                name="email"
                placeholder="E-mail"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </S.BoxInpCad>

            <S.BoxInpCad>
              <S.InpCadMask
                type="tel"
                name="telCelular"
                mask={"(99) 99999-9999"}
                maskChar="_"
                value={dataContact.celular}
                placeholder="Celular"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  removeMaskTel(e)
                }
              />

              <S.InpCadMask
                type="tel"
                name="telFixo"
                mask={"(99) 9999-9999"}
                maskChar="_"
                value={dataContact.fixo}
                placeholder="Fixo"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  removeMaskTel(e)
                }
              />
            </S.BoxInpCad>

            <S.BoxInpCad>
              <S.SlcCad
                width="19.9rem"
                name="categoria"
                value={dataContact.categoria}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCategoria(parseInt(e.target.value))
                }
              >
                {categoriaState.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </S.SlcCad>
            </S.BoxInpCad>
          </S.FormCad>
        </>
      )}
    </Main>
  );
};
