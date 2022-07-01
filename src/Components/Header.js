import styled from 'styled-components';


// Esse é o Header n.n
export const HeaderStyle = styled.div`
    display: flex;
    background-color: #6C161F;
    padding-top: 3vh;
    text-transform: uppercase;
    color: #E2D8D6;
    align-items: center;
    justify-content: center;
    font-family: arial;
    img {
        width: 5%;
    }
`
// Aqui fica o ninja da página principal :D
export const ImgStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4vh;
    margin-bottom: 5vh;
    img {
        width: 25%;
    }
`

// Essa é a página inicial de Escolha *u*
export const EscolhaStyle = styled.div`
    display: flex;
    background-color: #e2d8d6;
    justify-content: center;
    align-items: center;

    font-family: arial; 
    button { /* Aqui fica a estilização dos botões */
        background-color: #6C161F;
        color: #E2D8D6;
        width: 400px;
        height: 50px;
        border-radius: 50px;
        border-color: #952030;
        margin: 5px;
        :hover {
            cursor: pointer;
            background-color: #E2D8D6;
            color: #952030;
        }
    }   
`

