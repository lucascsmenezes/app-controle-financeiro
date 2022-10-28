import styled from "styled-components";

export const Tr = styled.tr``

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alingCenter ? "center" : "start")}
    wordp-break: break-all;

    svg{
        width: 20px;
        height:20px;
        cursor: pointer;
    }
`;
