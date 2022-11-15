import styled from "styled-components";


const Content = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-bottom: 80px;

`;


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
`

const IconDiv = styled.div`
 padding-top: 60px;

`



export {
    Content,
    OpenQuestion,
    IconDiv
    
}