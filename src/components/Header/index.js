import React from 'react';
import * as C from "./styles";


const Header = () => {
  return(
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
        <C.Link href="/"> Home </C.Link>
        <C.Link href="/projeto"> Projeto </C.Link>
        <C.Link href="/sobre"> Sobre </C.Link>
      </C.Header>
    </C.Container>
    );
};  

export default Header;