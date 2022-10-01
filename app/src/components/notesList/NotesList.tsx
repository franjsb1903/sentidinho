import styled from 'styled-components'
import { useGetAllNotesQuery } from '../../redux/slices/notesAPI'
import NoteCard from '../noteCard/NoteCard'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  justify-content: center;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: flex-start;
  gap: 10px 20px;
`

const NotesList = () => {
  const { data, isLoading } = useGetAllNotesQuery()
  console.log({ data })
  return (
    <Container>
      <ListContainer>
        {!isLoading &&
          data?.notes.map(note => <NoteCard note={note} key={note.id} />)}
      </ListContainer>
    </Container>
  )
}

export default NotesList
