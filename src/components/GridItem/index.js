import { React, useState } from 'react';
import * as C from "./styles";
import EditDialog from '../EditDialog';
import {
  FaArrowAltCircleUp, 
  FaArrowAltCircleDown,
  FaTrash
} from "react-icons/fa";

const GridItem = ({item, onDelete, editTodo}) => {

  let [open, setOpen] = useState(false);
  
  let closeDialog = () => {
    setOpen(!open);
  }

  return(
    <>
      <C.Tr>
      <EditDialog open={open} closeDialog={closeDialog} editTodo={editTodo} todo={item} /> 
        <C.Td><C.Checkbox type="checkbox" /></C.Td>
        <C.Td>{item.date}</C.Td>
        <C.Td onClick={() => setOpen(true)}>{item.desc}</C.Td>
        <C.Td>{item.amount}</C.Td>
        <C.Td alignCenter>
          {item.expense ? ( <FaArrowAltCircleDown color="red" />) : ( <FaArrowAltCircleUp color="green" /> )}
        </C.Td>
        <C.Td alignCenter>
          <FaTrash onClick={()=> onDelete(item.id)}/>         
        </C.Td>
      </C.Tr>
    
    </>
  );
};  

export default GridItem