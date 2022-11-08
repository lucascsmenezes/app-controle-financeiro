import {React, useState} from 'react';
import * as C from "./styles";
import {
  FaArrowAltCircleUp, 
  FaArrowAltCircleDown,
  FaTrash
} from "react-icons/fa";
import EditDialog from '../EditDialog';

const GridItem = ({item, onDelete, editTodo}) => {
  let [open, setOpen] = useState(false);
 
  let closeDialog = () => {
    setOpen(!open);
  }

  return(
    <>
      <EditDialog open={open} closeDialog={closeDialog} todo={item} editTodo={editTodo} /> 
      <C.Tr>
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