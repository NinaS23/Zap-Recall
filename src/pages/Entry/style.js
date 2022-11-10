import styled from "styled-components";

const Content = styled.div`
    display: flex;
    align-items: center;
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
        /* ZapRecall */
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
export {
  Content
};