import styled from "styled-components";

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
    IconDiv,
    BoxValidation,
    AnswerDiv,
    Red,
    Green,
    Orange
}