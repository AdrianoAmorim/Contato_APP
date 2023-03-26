import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { HeaderContext } from "../../contexts/HeaderContext";


export const Visualizar = () => {
    const { id } = useParams();
    const { setHeaderState } = useContext(HeaderContext);
    const configHeader = {
        btnConfig: false, btnSave: false, btnDelete: true, btnBack: true, btnEditar: true, title: "Visualizar"
    };
    //Seta na primeira montagem do component os botoes do header 
    useEffect(() => {
        setHeaderState(configHeader);
    }, [])
    return (
        <>
            <div className="teste">
                <h1>Editar</h1>
                <h1>{id}</h1>
            </div>
        </>
    )
}