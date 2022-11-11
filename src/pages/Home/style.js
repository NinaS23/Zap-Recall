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


export {
    Content,
    ClosedCards,
    OpenQuestion,
    
}