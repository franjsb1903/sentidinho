import styled from 'styled-components'
import { TextInput, TextArea, Label } from '../input/Input'
import { Column, Col12 } from '../flex/Flex'
import { useState } from 'react'
import { usePostNewNoteMutation } from '../../redux/slices/notesAPI'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/Button'
import Progress from '../loading/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`

const initialState = {
  title: '',
  content: '',
}

const FormNewNote = ({ closeDialog }: { closeDialog: () => void }) => {
  const [note, setNote] = useState(initialState)
  const [addNote, { isLoading }] = usePostNewNoteMutation()
  const navigate = useNavigate()

  const onChangeInput = (event: any) => {
    const { value, name } = event.target

    setNote({
      ...note,
      [name]: value,
    })
  }

  const onSendNote = () => {
    addNote(note).then(() => {
      closeDialog()
      setNote(initialState)
      navigate('/')
    })
  }

  return (
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
              required={true}
              value={note.title}
              onChange={onChangeInput}
            />
          </Col12>
          <Col12>
            <Label>
              Contenido:
              <TextArea
                rows={7}
                name="content"
                placeholder="Escribe aquí el contenido de la nota"
                required={true}
                value={note.content}
                onChange={onChangeInput}
              />
            </Label>
          </Col12>
        </Column>
      </Container>
      <ButtonsContainer>
        <Button
          bgcolor="gray"
          bradius="10px"
          type="button"
          onClick={closeDialog}
          width="100px"
        >
          Cancelar
        </Button>
        <Button
          bgcolor="green"
          bradius="10px"
          type="button"
          onClick={onSendNote}
          width="100px"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {isLoading ? <Progress color="white" size="small" /> : 'Añadir nota'}
        </Button>
      </ButtonsContainer>
    </form>
  )
}

export default FormNewNote
