import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
export const BoxListContacts = styled(ScrollArea.Root)`
  width:100vh;
  height: 125px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--text-button);
  padding: 5px 10px;
`;

export const ViewportListContacts = styled(ScrollArea.Viewport)`
    width: 100%;
    height: 100%;
`;
export const CornerListContacts = styled(ScrollArea.Corner)`
    
`;
export const ScrollbarListContacts = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  padding: 2px;
  background: #aad5ce;
  transition: background 160ms ease-out;

  &[data-orientation='vertical']{
    width: .5rem;
  }
  &[data-orientation='horizontal']{
    flex-direction: column;
    height:.5rem;
  }
  &:hover{
    background: #6cb7aa;
  }

`;

export const ThumbListContacts = styled(ScrollArea.Thumb)`
  flex: 1;
  background: var(--bg-button);
  border-radius: 10px;
  position: relative;

  &::before{
    content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 14px;
  min-height: 14px;
  }

`;

