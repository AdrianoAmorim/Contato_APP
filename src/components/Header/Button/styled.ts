import * as Toolbar from "@radix-ui/react-toolbar";
import styled from "styled-components";

type ButtonProps = {
    bgcolor?:string
}
export const ToolbarButton = styled(Toolbar.Button)<ButtonProps>`
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.bgcolor ? `var(${props.bgcolor})` : 'var(--bg-button)' };
    cursor: pointer;
    width: 40px;
`;