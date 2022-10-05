import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  TbExclamationMark,
  TbExclamationMarkOff,
  TbTrashOff,
  TbTrash,
} from 'react-icons/tb'
import moment from 'moment'
import { Row, Col6 } from '../flex/Flex'
import { Button } from '../button/Button'
import { INote } from '../../types/INote'
import {
  usePutChangeImportanceMutation,
  useDeleteNoteMutation,
} from '../../redux/slices/notesAPI'

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

const Title = styled.h2`
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
  const [changeImportance] = usePutChangeImportanceMutation()
  const [deleteNote] = useDeleteNoteMutation()
  const navigate = useNavigate()

  const onChangeImportance = () => {
    changeImportance(note.id)
    navigate(
      note.deleted
        ? '/deleted'
        : note.important
        ? '/no-important'
        : '/important'
    )
  }

  const onDelete = () => {
    deleteNote(note.id)
    navigate(
      note.deleted
        ? note.important
          ? '/important'
          : '/no-important'
        : '/deleted'
    )
  }

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
      <Row padding="10px">
        <Col6>
          <Button
            bgcolor="#5799db"
            bradius="10px"
            width="70px"
            height="40px"
            onClick={onChangeImportance}
          >
            {note.important ? (
              <TbExclamationMarkOff size={'1.2rem'} fontWeight="bold" />
            ) : (
              <TbExclamationMark size={'1.2rem'} fontWeight="bold" />
            )}
          </Button>
        </Col6>
        <Col6>
          <Button
            bgcolor={note.deleted ? 'green' : '#d94a26'}
            bradius="10px"
            width="70px"
            height="40px"
            onClick={onDelete}
          >
            {note.deleted ? (
              <TbTrashOff size="1rem" />
            ) : (
              <TbTrash size={'1rem'} />
            )}
          </Button>
        </Col6>
      </Row>
    </Container>
  )
}

export default NoteCard
