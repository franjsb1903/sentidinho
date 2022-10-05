import { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { IconButton, Button } from '../button/Button'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '../dialog/Dialog'
import { TextInput, TextArea, Label } from '../input/Input'
import { Column, Col12 } from '../flex/Flex'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
`

const AddNoteDialog = () => {
  const [open, setOpen] = useState(false)

  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

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
      <Dialog open={open} width="500px" height="500px">
        <DialogTitle>
          <h2>Añadir nota</h2>
          <IconButton onClick={closeDialog}>
            <VscClose color="black" size={'1.2rem'} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form>
            <Container>
              <Column padding="1rem" height="150px">
                <Col12 direction="column">
                  <Label>Título:</Label>
                  <TextInput
                    type={'text'}
                    name="title"
                    placeholder="Título"
                    maxLength={25}
                  />
                </Col12>
                <Col12>
                  <Label>
                    Contenido:
                    <TextArea
                      rows={7}
                      name="content"
                      placeholder="Escribe aquí el contenido de la nota"
                    />
                  </Label>
                </Col12>
              </Column>
            </Container>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            bgcolor="gray"
            bradius="10px"
            type="button"
            onClick={closeDialog}
          >
            Cancelar
          </Button>
          <Button bgcolor="green" bradius="10px" type="button">
            Añadir nota
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddNoteDialog
