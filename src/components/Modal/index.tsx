import { Dispatch, ReactNode, SetStateAction } from 'react';
import * as S from  './styled';


type ModalType = {
    isOpen:boolean,
    onClose?: () => void, 
    titleModal: string,
    textContentModal:string,
    typeErrorModal?:boolean
}
export const Modal = ({isOpen,onClose,typeErrorModal,titleModal,textContentModal}:ModalType)=>{
    
    if(!isOpen){
        return null
    }
    return(
        <S.ModalContainer >
            <S.ModalContent typeErrorModal={typeErrorModal} className='openModalAnimation'>
            <h1>{titleModal}</h1>
        <div className="contentModal">
          <p>{textContentModal}</p>
        </div>
        <div className="boxButtonModal">
          <button onClick={onClose}>OK</button>
        </div>
            </S.ModalContent>
        </S.ModalContainer>
    )
}