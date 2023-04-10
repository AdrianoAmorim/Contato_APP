import styled from "styled-components";


type StyleModalType = {
  colorError?:boolean
}


export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
export const ModalContent = styled.div<StyleModalType>`
  background-color: #fcfcfccd; 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: calc(100vw - 40px);

  & h1{
    text-align: center;
    font-size: 1.5rem;
    color: ${props=> props.colorError ? `var(--bg-danger)`:`var(--text-primary)`};
    border-bottom: 2px solid var(--border-input);
    width: 100%;
  }
 & .contentModal{
    padding: 10px;
    text-align: center;
 }

 & .boxButtonModal{
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0 10px;
    & button{
      background-color: var(--bg-button);
      color: #fff;
      font-size:1rem;
      border:none;
      border-radius: 8px;
      padding: .3rem 2.5rem;
      cursor:pointer;
      transition: background-color .2s ease-in;
    }

    & button:hover{
        background-color: #e17100 ;
      }
 }
`
