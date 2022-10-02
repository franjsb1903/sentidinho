import styled from 'styled-components'
import Button from '../button/Button'
import { INote } from '../../types/INote'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  height: 400px;
  width: 400px;
  border-radius: 10%;
  overflow: hidden;
  padding: 2rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  alignt-items: center;
  align-content: center;
  align-self: center;
  width: 100%;
  padding: 10px;
`

const Col6 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.textTrans};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  padding: 0.3rem;
`

const ContentContainer = styled.div`
  padding: 1rem;
  min-height: 250px;
  max-height: 250px;
  overflow: auto;
`

const Content = styled.p`
  color: ${({ theme }) => theme.text};
`

const NoteCard = ({ note }: { note: INote }) => {
  return (
    <Container>
      <Title>{note.title}</Title>
      <Divider />
      <ContentContainer>
        <Content>{note.content}</Content>
      </ContentContainer>
      <Row>
        <Col6>
          <Button bgcolor="#5799db">
            {note.important ? 'Deshacer importante' : 'Hacer importante'}
          </Button>
        </Col6>
        <Col6>
          <Button bgcolor="#d94a26">
            {note.deleted ? 'Recuperar' : 'Eliminar'}
          </Button>
        </Col6>
      </Row>
    </Container>
  )
}

export default NoteCard
