import styled from "styled-components";

import InputMask from 'react-input-mask';

type CadastroProps = {
    width?: string,
    height?: string,
}

export const FormCad = styled.form`
    background-color: var(--bg-card-contact);
    box-shadow: 2px 5px 10px 1px #cfcfcfbb;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 45rem;
    border-radius: 10px;
    padding: 4rem 2rem 2rem 2rem;
    
`
export const BoxAvatar = styled.div`
    display: flex;
    width: 100%;
    max-width: 8rem;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-bottom: -1.8rem;
    & img{
        width: 100%;
    }
`
export const BoxInpCad = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    gap: 1rem;
    &:nth-child(1){
        margin-top: 0;
    }
`

export const InpCad = styled.input<CadastroProps>`
  height:${props => props.height ? props.height : "45px"};
  width: 100%;
  max-width: ${props => props.width ? props.width : "28rem"};
  border: 1px solid var(--border-input);
  outline: none;
  padding-inline-start: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
`
export const InpCadMask = styled(InputMask)<CadastroProps>`
  height:${props => props.height ? props.height : "45px"};
  width: 100%;
  max-width: ${props => props.width ? props.width : "28rem"};
  border: 1px solid var(--border-input);
  outline: none;
  padding-inline-start: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
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
`
export const ButtonAddTel = styled.button`
    background: none;
    border: none;
    z-index:1;
    border-radius: 10px;
    cursor: pointer;
   margin-left: -3rem;
`