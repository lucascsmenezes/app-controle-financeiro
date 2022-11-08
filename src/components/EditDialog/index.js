import {React, useState} from 'react'
import { TextField } from './styles'
import { Button } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogActions } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogContentText } from '@mui/material'
import { DialogTitle } from '@mui/material'


  const EditDialog = ({open, closeDialog, todo, editTodo}) => {

  const [editText, setEditText]  = useState(todo);

  const textHandler = () => {
      editTodo(todo.id, editText);
  }
  return (  
    <>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">{"Editar Descrição"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField fullWidth defaultValue={editText} onChange={(e => setEditText(e.target.value))} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancelar</Button>
          <Button onClick={textHandler} autoFocus> Ok </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditDialog