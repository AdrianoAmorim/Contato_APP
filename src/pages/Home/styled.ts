import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100vw;
    height: 100vh;
    padding: 5px 5px;
    
`;
export const CardContacts = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--text-button);
    width: 90vw;
    border-radius: 10px;
    padding: 5px;
    padding-inline-start: 20px;
    
`

export const NameContacts = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`