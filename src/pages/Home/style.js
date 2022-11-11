import styled from "styled-components";


const Content = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-bottom: 80px;

`;

const ClosedCards = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5px;
`

const OpenQuestion = styled.div`
background-color: #FFFFD4;
width: 80%;
margin-top: 10px;
height: 130px;
border-radius: 15px ;
`

export {
    Content,
    ClosedCards,
    OpenQuestion
}