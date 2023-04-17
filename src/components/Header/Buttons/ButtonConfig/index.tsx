import { ReactNode, useContext } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  show?: boolean;
  bgcolor?: string;
}

export const ButtonConfig = ({ children, show, bgcolor }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <>
      {show && (
        <S.Button bgcolor={bgcolor} onClick={() => navigate("/configuracao")}>
          {children}
        </S.Button>
      )}
    </>
  );
};
