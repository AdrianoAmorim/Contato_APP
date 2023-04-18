import styled from "styled-components";

export const BoxDarkTheme = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top:1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #85c2c2;
`;
export const LabelDarkTheme = styled.label`
  position: relative;
  color: var(--text-primary);
  font-size: 1.6rem;
  cursor: pointer;
  padding-inline-end: 80px;

  .checkBox {
    position: absolute;
    top: 5px;
    right: 2px;
    width: 32px;
    height: 32px;
    background-color: #d3ede0;
    border-radius: 8px;
    border: 1px solid var(--border-input);
    transition: all 0.2s ease-in-out;
  }
  &:hover .checkBox {
    background-color: var(--border-input);
  }
  & input:checked ~ .checkBox {
    background-color: var(--bg-button);
    border: none;
  }
  & .checkBox:after {
    content: "";
    position: absolute;
    display: none;
    top: 5px;
    right: 8px;
    width: 10px;
    height: 11px;
    border: solid #fff;
    border-width: 0 4px 3px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }

  & input:checked ~ .checkBox:after {
    display: block;
  }
`;

export const CheckDarkMode = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;

export const BoxCadCategoria = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;
`;

export const BoxInpCadCategoria = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;
export const TitleCadCategoria = styled.span`
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom:1rem;
`;

export const InpCadCategoria = styled.input`
  width: 100%;
  max-width: 13rem;
  height: 45px;
  border: 1px solid var(--border-input);
  outline: none;
  padding-inline-start: 15px;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 10px;
  color: var(--text-primary);
`;

export const BtnCadCategoria = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-button);
  cursor: pointer;
  width: 40px;
`;
