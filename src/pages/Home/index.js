import React from "react";
import * as C from "./styles";

const Home = () => {
/*Inserção do Código*/


  return (
    <div>
      <C.Body>
        <C.ContainerTop>
          <C.NavBar>
            <C.img/>
            <C.ul>
              <C.li><C.a href="/">Home</C.a></C.li>
              <C.li><C.a href="/projeto">Projeto</C.a></C.li>
              <C.li><C.a href="/sobre">Sobre</C.a></C.li>
            </C.ul>
          </C.NavBar>
        </C.ContainerTop>

        <C.ContentCenter>
          <C.h1>Conteúdo Central</C.h1>
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