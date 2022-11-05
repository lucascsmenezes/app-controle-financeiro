import styled from "styled-components";


export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 35%;
    width: 500px;
    height: 100px;
    background-color: #1C6EA4;
    border-radius: 10px;
    box-shadow: -webkit-box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF, 5px 5px 15px 5px rgba(0,0,0,0);

`;

export const inputText = styled.input`
    width: 200px;
    height: 30px;
    outline: none;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 150px;
    height 30px;
    border: none;
    background: gray;
    color: white;
    cursor: pointer;
`;