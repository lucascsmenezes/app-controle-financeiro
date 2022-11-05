import React from 'react'
import * as C from "./styles"
import { FaExclamationTriangle } from 'react-icons/fa'

const ModalDialog = () => {

  const closeModal = () => { 
    document.getElementById('modal').style.visibility = "hidden";
  }
  return (
    <div>
        <C.Modal id="modal">
            <C.inputText placeholder='Digite uma descrição'/>
            <C.Button>Atualizar</C.Button>
            <FaExclamationTriangle id="icon" onClick={closeModal} />
        </C.Modal>
    </div>
  )
}

export default ModalDialog