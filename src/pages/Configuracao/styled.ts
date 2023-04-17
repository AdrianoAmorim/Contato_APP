import styled from "styled-components";

export const BoxDarkTheme = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--text-primary);
  font-size: 1.6rem;
  cursor: pointer;

  .checkBox {
    position: absolute;
    top: 5px;
    right: 2px;
    width: 32px;
    height: 32px;
    background-color: #fcfcfc;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    
  }
  &:hover .checkBox {
    background-color: var(--border-input);
  }
  & input:checked ~ .checkBox {
    background-color: var(--bg-button);
  }
  & .checkBox:after{
    content:"";
    position:absolute;
    display: none;
    top: 5px;
    right: 8px;
    width: 10px;
    height:11px;
    border:solid #fff;
    border-width: 0 4px 3px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }

  & input:checked ~ .checkBox:after{
    display:block
  }
`;

export const CheckDarkMode = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;
