import { ReactNode } from 'react';
import * as S from  './styled';


type ModalType = {
    isOpen:boolean,
    onClose?: ()=>void,
    children?: ReactNode,
    error?:boolean
}
export const Modal = ({isOpen,onClose,children,error}:ModalType)=>{
    
    if(!isOpen){
        return null
    }
    return(
        <S.ModalContainer >
            <S.ModalContent colorError={error} className='openModalAnimation'>
                {children}
            </S.ModalContent>
        </S.ModalContainer>
    )
}