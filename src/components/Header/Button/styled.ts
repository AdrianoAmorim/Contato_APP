import * as Toolbar from "@radix-ui/react-toolbar";
import styled from "styled-components";


export const ToolbarButton = styled(Toolbar.Button)`
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-button);
    cursor: pointer;
    width: 40px;
`;