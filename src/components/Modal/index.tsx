import { Dispatch, ReactNode, SetStateAction } from "react";
import * as S from "./styled";

type ModalType = {
  isOpen: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  titleModal: string;
  textContentModal: string;
  typeErrorModal?: boolean;
  typeDeleteModal?: boolean;
};
export const Modal = ({
  isOpen,
  onConfirm,
  onCancel,
  typeErrorModal,
  typeDeleteModal,
  titleModal,
  textContentModal,
}: ModalType) => {
  if (!isOpen) {
    return null;
  }
  return (
    <S.ModalContainer>
      <S.ModalContent
        typeErrorModal={typeErrorModal}
        className="openModalAnimation"
      >
        <h1>{titleModal}</h1>
        <div className="contentModal">
          <p>{textContentModal}</p>
        </div>
        <div className="boxButtonModal">
            
          {typeDeleteModal && <button id="btnCancelModal" onClick={onCancel}>Cancel</button>}
          <button onClick={onConfirm}>OK</button>

        </div>
      </S.ModalContent>
    </S.ModalContainer>
  );
};
