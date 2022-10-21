import styled from 'styled-components'
import { INote } from '../../types/INote'
import NoteCard from '../noteCard/NoteCard'
import Progress from '../loading/Loading'

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 70vh;
  overflow: auto;
  justify-content: center;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  gap: 50px;
`

const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  align-items: center;
`

const NoData = styled.h1`
  color: ${({ theme }) => theme.text};
`

const ShowNoData = () => (
  <NoDataContainer>
    <NoData>No hay notas que mostrar</NoData>
  </NoDataContainer>
)

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
        {isLoading ? (
          <Progress color="white" size="medium" />
        ) : data ? (
          data.length > 0 ? (
            data?.map(note => <NoteCard note={note} key={note.id} />)
          ) : (
            <ShowNoData />
          )
        ) : (
          <ShowNoData />
        )}
      </ListContainer>
    </Container>
  )
}

export default NotesList
