import React from 'react'
import * as C from "./styles"

const ModalDialog = () => {
  return (
    <div>
        <C.Modal>
            <C.inputText placeholder='Digite uma descrição'/>
            <C.Button>Atualizar</C.Button>
        </C.Modal>
    </div>
  )
}

export default ModalDialog