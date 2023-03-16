

import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    left:0;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 10px 15px;
    background-color: var(--bg-header);
    width: 100%;
    height: 70px;
    box-shadow: 1px 1px 6px 2px #c0c0c0;
    border-radius: 0 0 18px 18px;
`
export const TitleHeader = styled.h5`
    color: var(--text-title);
    font-size: 1.3rem;
    width: 100%;
`;

export const BoxButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
