import styled from "styled-components";

export const BoxCardContacts = styled.div`
    position:relative;
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;


`
export const CardContacts = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--bg-card-contact);
    width: 90%;
    height: 3.2rem;
    max-width: 80rem;
    border-radius: 10px;
    padding: 5px 5px 5px 10px;
    margin-top: 10px;
    box-shadow: 2px 5px 10px 1px #cfcfcfbb;
    cursor: pointer;
   
    &:nth-of-type(1){
      margin-top: 0;
    }
    & .iconContact{
      margin-right: .4rem;
    }
    
`

export const NameContacts = styled.span`

  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
   
`
export const BoxInpSearch = styled.div`
    position: fixed;
    z-index:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    backdrop-filter: blur(1px);
    & #iconSearch{
      z-index: 1;
     margin-inline-start: -1.7rem;
      cursor:pointer;
    }
`;

export const InpSearch = styled.input`
  height: 45px;
  width: 100%;
  max-width: 28rem;
  border: 1px solid var(--border-input);
  box-shadow: 2px 5px 10px 1px #cfcfcfbb;
  outline: none;
  padding-inline-start: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
  &::-webkit-search-cancel-button{
    display: none;
  }

`

export const BtnCadastrar = styled.button`
  position: fixed;
  bottom: 1.3rem;
  right: 2rem;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  background-color: var(--bg-button);
  cursor: pointer;
`;