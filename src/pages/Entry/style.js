import styled from "styled-components";

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    div{
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: 90px;
         }
         h1{
            margin-top: 5px;
            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 31px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.012em;
            color: #FFFFFF;
          }
  }

`
const InputMeta = styled.input`
  width: 200px;
  height: 37px;
  background: #FFFFFF;
  margin-top: 60px;
  border-radius: 11px;
  ::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.012em; 
    color: #808080;
  }
`
export {
  Content,
  InputMeta
};