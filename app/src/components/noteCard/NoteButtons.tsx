import {
  TbExclamationMark,
  TbExclamationMarkOff,
  TbTrash,
  TbTrashOff,
} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import {
  useDeleteNoteMutation,
  usePutChangeImportanceMutation,
} from '../../redux/slices/notesAPI'
import { INote } from '../../types/INote'
import { Button } from '../button/Button'
import { Row, Col6 } from '../flex/Flex'

const NoteButtons = ({ note }: { note: INote }) => {
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
  )
}

export default NoteButtons
