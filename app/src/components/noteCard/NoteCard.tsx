import styled from 'styled-components'
import moment from 'moment'
import { INote } from '../../types/INote'
import NoteButtons from './NoteButtons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  height: 400px;
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  padding: 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.cardDivider};
`

const Title = styled.h3`
  color: ${({ theme }) => theme.textCard};
  padding: 0.3rem;
  text-decoration: ${({ deleted }: { deleted: boolean }) =>
    deleted ? 'line-through' : 'none'};
`

const ContentContainer = styled.div`
  padding: 1rem;
  min-height: 250px;
  max-height: 250px;
  overflow: auto;
`

const Content = styled.p`
  color: ${({ theme }) => theme.textCard};
  white-space: pre-wrap;
`

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Date = styled.p`
  color: ${({ theme }) => theme.textCard};
  font-size: 0.7rem;
`

const NoteCard = ({ note }: { note: INote }) => {
  return (
    <Container>
      <Title deleted={note.deleted}>{note.title}</Title>
      <Divider />
      <DateContainer>
        <Date>
          <strong>{moment(note.date).format('DD/MM/YYYY')}</strong>
        </Date>
      </DateContainer>
      <ContentContainer>
        <Content>{note.content}</Content>
      </ContentContainer>
      <Divider />
      <NoteButtons note={note} />
    </Container>
  )
}

export default NoteCard
