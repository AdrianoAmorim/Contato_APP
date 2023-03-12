
import * as Toolbar from "@radix-ui/react-toolbar";
import styled from "styled-components";

export const ToolbarRoot = styled(Toolbar.Root)`
    position: fixed;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 10px;
    background-color: var(--bg-header);
    width: 100%;
    height: 70px;
    box-shadow: 1px 1px 6px 2px #c0c0c0;
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
export const ToolbarButton = styled(Toolbar.Button)`
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-button);
    cursor: pointer;
    width: 40px;
`;