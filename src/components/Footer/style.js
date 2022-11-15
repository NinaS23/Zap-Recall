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

export {
 FooterDiv
}