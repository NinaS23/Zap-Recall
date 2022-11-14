import styled from "styled-components";


const ClosedCards = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5px;
`
const CardsOpen = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`
const OpenAnswer = styled.div`
background-color: #FFFFD4;
width: 80%;
margin-top: 10px;
height: 130px;
border-radius: 15px;

h2{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
}
`

export {
    CardsOpen, 
    ClosedCards,
    OpenAnswer
}