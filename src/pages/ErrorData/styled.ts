import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 20rem;
  margin: 2rem 0;

  & img {
    width: 100%;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span{
    text-align: center;
  }
`;
export const BoxOptionExit = styled.div`
  display: flex;
  justify-content: center;

`
export const LinkExit = styled.span`
  cursor: pointer;
  transition: all .2s ease;

  &:hover,&:active{
    color: var(--bg-header)
  }
`