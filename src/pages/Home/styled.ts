import styled from "styled-components";


export const Main = styled.main`
    position: relative;
    top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    width: 100vw;
    padding: 5px 5px;
    
`;
export const CardContacts = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--bg-card-contact);
    width: 90vw;
    height: 3.2rem;
    max-width: 80rem;
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
    padding-inline-start: 1rem;
    box-shadow: 2px 5px 10px 1px #bbbbbb;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85vw;
    max-width: 40rem;
    & #iconSearch{
      margin-inline-start: -2rem;
    }
`;

export const InpSearch = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  padding-inline-start: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  -webkit-appearance: none;
  &::-webkit-search-cancel-button{
    display: none;
  }

`