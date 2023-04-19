import styled from "styled-components";


export const BoxInfoContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 45rem;
    box-shadow: 2px 5px 10px 1px #cfcfcfbb;
    background-color: var(--bg-card-contact);
    border-radius: 10px;
    overflow: hidden;
`

export const BoxName = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: var(--border-input);
    color: #fcfcfc;

    @media (max-width: 750px){
    text-align:center;
        & h1{

            font-size: 1.6rem;
        }
    }
    @media (max-width: 450px){
        & h1{

            font-size: 1.3rem;
        }
    }
    `
export const BoxInfo = styled.div`
    display: flex;
    width: 100%;
    padding:1rem;
    .boxTitleItens{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .labelItem{
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 1.2rem;
        }
    }
    .boxItens{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin-left: .1rem;
        .item{
            font-size: 1rem;
            font-weight: normal;
            margin-bottom: 1rem;
            padding-bottom: .2rem;
            padding-left: .4rem;
            border-bottom: 1px solid #8bc5c5;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    
`;