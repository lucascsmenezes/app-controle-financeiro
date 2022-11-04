import React, { useState } from 'react';
import Grid from '../Grid';
import * as C from "./styles";


const Form = ({handleAdd, transactionsList, setTransactionsList}) => {

  const newData = new Date();

  const [id, setId] = useState(0);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [inputSearch, setSearch] = useState("");
  const [isExpense, setExpense] = useState(false);
  const currentDate = 
    (newData.getUTCDay() -1) + 
    "/" + 
    (newData.getUTCMonth() + 1) + 
    "/" + 
    newData.getFullYear() + 
    " " +
    "-" + 
    " " +
    newData.getHours() +
    ":" +
    newData.getMinutes();

  const handleSave = () => {

    if(!desc || !amount){
      alert("Informe a descrição e o valor");
      return;
    }else if(amount < 0){
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: id,
      desc: desc.toLocaleLowerCase(),
      amount: amount,
      expense: isExpense,
      date: currentDate
    }

    setId(id + 1);
    handleAdd(transaction);

    setDesc("");
    setAmount("");
  } 

  const database = localStorage.getItem('transaction');
  const jsonParse = JSON.parse(database);
  
  const handleFilter = () => {

    if(!inputSearch){
      return setTransactionsList(jsonParse);
    }

    if(database !== null){
      setTransactionsList(jsonParse.filter(d => {
        return d.desc === inputSearch.toLocaleLowerCase();
      }));
    }else{
      alert('Não há dados armazenados');
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
            value={inputSearch} 
            placeholder='Pesquisar...'
            onChange={(e) => setSearch(e.target.value)}
          />
          </C.InputContentSearch>
          <C.ButtonSearch onClick={handleFilter}>Pesquisar</C.ButtonSearch>
      </C.ContainerSearch>

      <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  );
};
export default Form;