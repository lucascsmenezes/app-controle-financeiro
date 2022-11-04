import React from "react";
import * as C from "./styles";
const Home = () => {


  return (
    <div>
      <C.Body>
        <C.ContainerTop>
          <C.NavBar>
            <C.img/>
            <C.ul>
              <C.li><C.a href="/">Home</C.a></C.li>
              <C.li><C.a href="/projeto">Controle Financeiro</C.a></C.li>
              <C.li><C.a href="/sobre">Sobre</C.a></C.li>
            </C.ul>
          </C.NavBar>
        </C.ContainerTop>

        <C.ContentCenter>
          <C.Grid>
            <C.Card>
              <C.CardUm />
            </C.Card>
            <C.Card>
                <C.h1>Card 2</C.h1>
            </C.Card>
            <C.Card>
                <C.h1>Card 3</C.h1>
            </C.Card>
          </C.Grid>
        </C.ContentCenter>
        
        <C.ContentCenter>
          <C.h1>Conteúdo Secundário</C.h1>
        </C.ContentCenter>

        <C.Footer>
          <C.h1>Site desenvolvido em React</C.h1>
          <C.NavBar>
            <C.ul>
              <C.li><C.a href="/">Home</C.a></C.li>
              <C.li><C.a href="/projeto">Projeto</C.a></C.li>
              <C.li><C.a href="/sobre">Sobre</C.a></C.li>
            </C.ul>
          </C.NavBar>
        </C.Footer>
      </C.Body>
    </div>
  )
}

export default Home