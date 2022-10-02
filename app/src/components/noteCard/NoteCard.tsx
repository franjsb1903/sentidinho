import styled from 'styled-components'
import { INote } from '../../types/INote'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  height: 320px;
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
`

const Col6 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
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
  min-height: 200px;
  max-height: 200px;
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
          <Text>{note.important ? 'No es importante' : 'Es importante'}</Text>
        </Col6>
        <Col6>
          <Text>{note.deleted ? 'Recuperar' : 'Eliminar'}</Text>
        </Col6>
      </Row>
    </Container>
  )
}

export default NoteCard
