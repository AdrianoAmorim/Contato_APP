import styled from "styled-components";

export const BoxImgNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40%);
  margin-top: 2rem;
  & img {
    width: 100%;
  }
`;
export const TextNotFound = styled.span`
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-top: 2rem;
`;
