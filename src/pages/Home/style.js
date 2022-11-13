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

const OpenQuestion = styled.div`
background-color: #FFFFD4;
width: 80%;
margin-top: 10px;
height: 130px;
border-radius: 15px;
div{

    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
}
h2{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
}
`

const IconDiv = styled.div`
 padding-top: 60px;

`

const BoxValidation = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 51px;
width: 100%;
border-radius: 15px;
height: 50px;

`
const AnswerDiv = styled.div`
padding-right: 10px;
height: 100%;
margin-top: 5px;
border-radius: 15px;


`


const Red = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FF3030;
margin-left: 20px;
width: 30%;
height: 40px;
border-radius: 15px;
border-radius: 5px;
h3{

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 8px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
`
const Green = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #2FBE34;
margin-left: 20px;
width: 30%;
height: 40px;
border-radius: 15px;
border-radius: 5px;
h3{

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 8px;
display: flex;
align-items: center;
color: #FFFFFF;
}
`
const Orange = styled.div`
display: flex;
justify-content: center;
padding-left: 10px;
align-items: center;
background-color: #FF922E;
margin-left: 20px;
width: 30%;
height: 40px;
border-radius: 15px;
border-radius: 5px;
h3{

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 8px;
display: flex;
align-items: center;
color: #FFFFFF;
}
`


export {
    Content,
    ClosedCards,
    OpenQuestion,
    CardsOpen,
    OpenAnswer,
    Orange,
    Red,
    IconDiv,
    Green,
    AnswerDiv,
    BoxValidation
    
}