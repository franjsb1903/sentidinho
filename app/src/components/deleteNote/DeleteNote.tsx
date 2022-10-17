import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDeleteNoteForeverMutation } from '../../redux/slices/notesAPI'
import { TbX } from 'react-icons/tb'
import { VscClose } from 'react-icons/vsc'
import { Button, IconButton } from '../button/Button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '../dialog/Dialog'
import { INote } from '../../types/INote'
import Progress from '../loading/Loading'

const ContentMessage = styled.p`
  font-size: 1.5rem;
  color: black;
  text-align: center;
`

const DeleteNote = ({ note }: { note: INote }) => {
  const [deleteNoteForever, { isLoading }] = useDeleteNoteForeverMutation()
  const navigate = useNavigate()

  const openDialog = () => {
    const dialog: any = document.querySelector('#dialog-delete-note')
    const noteTitle: any = document.querySelector('#note-title')
    noteTitle.textContent = note.title
    dialog.showModal()
  }

  const closeDialog = () => {
    const dialog: any = document.querySelector('#dialog-delete-note')
    const noteTitle: any = document.querySelector('#note-title')
    noteTitle.textContent = ''
    dialog.close()
  }

  const onDeleteNoteForever = () => {
    deleteNoteForever(note.id).then(() => {
      closeDialog()
      navigate('/')
    })
  }

  return (
    <>
      <Button
        bgcolor={'darkred'}
        bradius="10px"
        width="70px"
        height="40px"
        onClick={openDialog}
        title="Borrar nota para siempre"
      >
        <TbX size={'1rem'} />
      </Button>
      <Dialog id="dialog-delete-note" width="800px" height="300px">
        <DialogTitle>
          <h2>
            Borrar nota -{' '}
            <span style={{ color: 'darkred' }}>
              <strong id="note-title"></strong>
            </span>
          </h2>
          <IconButton onClick={closeDialog}>
            <VscClose color="black" size={'1.2rem'} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ContentMessage>
            Estás a punto de eliminar una nota de manera definitiva. Si lo
            haces, no podrás recuperarla. ¿Estás seguro?
          </ContentMessage>
        </DialogContent>
        <DialogActions>
          <Button
            bgcolor="gray"
            bradius="10px"
            height="50px"
            width="200px"
            onClick={closeDialog}
            textColor={'white'}
          >
            Cancelar
          </Button>
          <Button
            bgcolor="darkred"
            bradius="10px"
            height="50px"
            width="200px"
            onClick={onDeleteNoteForever}
            textColor={'white'}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {isLoading ? <Progress color="white" size="small" /> : 'Eliminar'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteNote
