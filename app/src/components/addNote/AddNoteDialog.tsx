import { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import { FaPlus } from 'react-icons/fa'
import { IconButton, Button } from '../button/Button'
import { Dialog, DialogContent, DialogTitle } from '../dialog/Dialog'
import FormNewNote from './FormNewNote'

const AddNoteDialog = () => {
  const openDialog = () => {
    const dialog: any = document.querySelector('#dialog-add-note')
    dialog.showModal()
  }
  const closeDialog = () => {
    const dialog: any = document.querySelector('#dialog-add-note')
    dialog.close()
  }

  return (
    <>
      <Button
        bgcolor="black"
        bradius="10px"
        height="50px"
        width="200px"
        onClick={openDialog}
        opacity={1}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          textTransform: 'uppercase',
        }}
      >
        <FaPlus /> Añadir nueva nota
      </Button>
      <Dialog id="dialog-add-note" width="500px" height="500px">
        <DialogTitle>
          <h2>Añadir nota</h2>
          <IconButton onClick={closeDialog}>
            <VscClose color="black" size={'1.2rem'} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <FormNewNote closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddNoteDialog
