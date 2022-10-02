import styled from 'styled-components'
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
          <h2>Cargando...</h2>
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
