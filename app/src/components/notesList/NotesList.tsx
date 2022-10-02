import styled from 'styled-components'
import { useGetAllNotesQuery } from '../../redux/slices/notesAPI'
import { INote } from '../../types/INote'
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
  margin-bottom: 100px;
`

const NotesList = ({
  isLoading,
  data,
}: {
  isLoading: boolean
  data: INote[] | undefined
}) => {
  return (
    <Container>
      <ListContainer>
        {!isLoading &&
          data?.map(note => <NoteCard note={note} key={note.id} />)}
      </ListContainer>
    </Container>
  )
}

export default NotesList
