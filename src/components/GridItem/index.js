import React from 'react';
import * as C from "./styles";
import { useState } from 'react';
import {
  FaArrowAltCircleUp, 
  FaArrowAltCircleDown,
  FaTrash
} from "react-icons/fa";

const GridItem = ({item, onDelete}) => {
  let [count, setCount] = useState(1);

  const openModal = ()=>{
    let acc = count++;

    if(acc === 2){
      document.getElementById('modal').style.visibility = "visible";
      setCount(null);
      return;
    }

  }
  
  return(
    <C.Tr>
      <C.Td>{item.date}</C.Td>
      <C.Td onClick={openModal}>{item.desc}</C.Td>
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