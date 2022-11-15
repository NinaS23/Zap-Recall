import styled from "styled-components";

const FooterDiv = styled.div`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFFFFF;
  text-align: center;
  height: 60px;
  z-index: 1;
h4{
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 58px;
/* identical to box height */
color: #FFFFFF
}
div{
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
}
`


const FooterDivResult = styled.div`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  bottom: 0;
  width: 100vw;
  background-color: #FFFFD4;
  text-align: center;
  height: 150px;
  z-index: 1;
h2{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #333333;
  margin-bottom: 7px;
}
div{
  margin-bottom: 10px;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
}
`

const FlexDiv = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    p{
      margin-left: 5px;
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
    img{
      width: 23px;
      height: 23px;
    }
`
const RestartButton = styled.button`
 width: 167px;
height: 32px;
border-style: none;
background: #EDE75F;
border-radius: 5px;
:hover{
  background: #F1EE8D;
}
`

export {
 FooterDiv,
 FooterDivResult,
 FlexDiv,
 RestartButton
}