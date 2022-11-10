import styled from "styled-components";

const SelectType = styled.select`
width: 200px;
height: 37px;
margin-top: 60px;
border-radius: 14px;
border-style: none;
background-color: #e9e4ee;
font-family: 'RocknRoll One';
color:  ${(props) => props.colorInput};
`
const Option = styled.option`
`;

export {
    SelectType,
    Option
}