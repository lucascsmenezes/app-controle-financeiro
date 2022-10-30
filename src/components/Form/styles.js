import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #cccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`;
export const ContainerSearch = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #cccc;
    border-radius: 5px;
    display: flex;
    justify-content: right;
    flex-direction: row;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px){
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputContentSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;

    @media (max-width: 750px){
        display: flex;
        flex-direction: column;
    }
`;


export const Label = styled.label``;


export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const InputSearch = styled.input`
    padding: 5px 10px;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 5px;
        margin-right: 10px;
        accent-color: black;
        margin-top: 0;
    }
`;


export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
`;
export const ButtonSearch = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #064a7a;
    transform: translateX(-15px);
`;