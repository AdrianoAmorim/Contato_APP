import { useContext, useEffect } from "react";
import { ButtonHeaderContext } from "../../contexts/ButtonHeaderContext";


export const Cadastro = () => {
    const { setButtonsState } = useContext(ButtonHeaderContext);
    const configButtons = {
        btnConfig: false,
        btnSave: true,
        btnDelete: false,
        btnBack: true
    };
    useEffect(() => {
        setButtonsState(configButtons);
    }, [])
    return (
        <>
            <div className="teste">
                <h1>Cadastro</h1>
            </div>
        </>
    )
}