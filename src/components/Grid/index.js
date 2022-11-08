import React from 'react';
import GridItem from "../GridItem";
import * as C from "./styles";

  const Grid = ({itens, setItens}) => {

    const onDelete = (id) => {
      var filter = itens.filter( (itens) => itens.id !== id );
      setItens(filter);

      localStorage.setItem('transaction', JSON.stringify(filter));    
    };

    const editTodo = (id, editText) => {

      var todoArray = [...itens]
      
      for( var i in todoArray){
        if(todoArray[i].id === id){
          todoArray[i].desc = editText;
        }
      }
  
      setItens(todoArray);
    
    };

  return(
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={10}></C.Th>
          <C.Th width={20} id="data">Data / Horário</C.Th>
          <C.Th width={20}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>Tipo</C.Th>
          <C.Th width={10} alignCenter></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
          {itens?.map((item, index)=>(<GridItem key={index} item={item} onDelete={onDelete} editTodo={editTodo}/>))}
      </C.Tbody>
    </C.Table>
    );
};  

export default Grid;