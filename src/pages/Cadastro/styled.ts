import styled from "styled-components";

type CadastroProps ={
    width?: string,
    height?: string,
}

export const FormCad = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 45rem;
    margin-top: 1rem;
`
export const BoxInpCad = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    gap: 1rem;
`

export const InpCad = styled.input<CadastroProps>`
  height:${props => props.height ? props.height : "45px"};
  width: 100%;
  max-width: ${props => props.width ? props.width : "28rem"};
  border: 1px solid var(--border-input);
  outline: none;
  padding-inline-start: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
  box-shadow: 2px 5px 10px 1px #cfcfcfbb;
`

export const SlcCad = styled.select<CadastroProps>`
height:${props => props.height ? props.height : "45px"};
  width: 100%;
  max-width: ${props => props.width ? props.width : "28rem"};
  border: 1px solid var(--border-input);
  outline: none;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
   box-shadow: 2px 5px 10px 1px #cfcfcfbb;
`
export const ButtonAddTel = styled.button`
    background-color: var(--bg-button);
     box-shadow: 2px 5px 10px 1px #cfcfcfbb;
    border: none;
    border-radius: 10px;
    padding: 3px 2px 1px 2px;
    margin-right: -10px;
    cursor: pointer;

`