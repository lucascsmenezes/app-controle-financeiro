import React, { useState } from 'react';
import Grid from '../Grid';
import * as C from "./styles";


const Form = ({handleAdd, transactionsList, setTransactionsList}) => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {

    if(!desc || !amount){
      alert("Informe a descrição e o valor");
      return;
    }else if(amount < 0){
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if(!search){
      alert("Informe a descrição");
      return;
    }

  }
  return(
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input 
            value={amount}
            type="number" 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </C.InputContent>

        <C.RadioGroup>
          <C.Label htmlFor='rIncome'>Entrada</C.Label>
            <C.Input 
              type="radio"
              id="rIncome"
              name="group1"
              onChange={()=>setExpense(isExpense)}
            />
          <C.Label htmlFor='rExpense'>Saida</C.Label>
          <C.Input 
            type="radio"
            id="rExpense"
            defaultChecked
            name="group1"
            onChange={()=>setExpense(!isExpense)}
          />
        </C.RadioGroup>
        
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>

      <C.ContainerSearch>
          <C.InputContentSearch>
            <C.Input 
            value={search} 
            placeholder='Pesquisar...'
            onChange={(e) => setSearch(e.target.value)}
          />
          </C.InputContentSearch>
          <C.ButtonSearch onClick={handleSearch}>Pesquisar</C.ButtonSearch>
      </C.ContainerSearch>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
    );
}; 

export default Form;