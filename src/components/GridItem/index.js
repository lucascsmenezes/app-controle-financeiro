import React from 'react';
import * as C from "./styles";
import {
  FaArrowAltCircleUp, 
  FaArrowAltCircleDown,
  FaTrash
} from "react-icons/fa";

const GridItem = ({item, onDelete}) => {

  const updateDesc = ()=>{
    alert('Cliquei');
  }

  return(
    <C.Tr>
      <C.Td>{item.date}</C.Td>
      <C.Td onClick={updateDesc}>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? ( <FaArrowAltCircleDown color="red" />) : ( <FaArrowAltCircleUp color="green" /> )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={()=> onDelete(item.id)}/>         
      </C.Td>
    </C.Tr>
  );
};  

export default GridItem;