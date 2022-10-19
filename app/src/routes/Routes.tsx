import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import AddNoteDialog from '../components/addNote/AddNoteDialog'
import Header from '../components/header/Header'
import NotesList from '../components/notesList/NotesList'
import ToggleDarkMode from '../components/toggleDarkMode/ToggleDarkMode'
import { useGetAllNotesQuery } from '../redux/slices/notesAPI'

const AddNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const ChangeModeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
  padding: 0.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: 30px;
  }
`

const RoutesApp = () => {
  const { data, isLoading } = useGetAllNotesQuery()
  return (
    <BrowserRouter>
      <Header />
      <AddNoteContainer>
        <AddNoteDialog />
      </AddNoteContainer>
      <Routes>
        <Route
          path="/"
          element={<NotesList data={data?.notes} isLoading={isLoading} />}
        />
        <Route
          path="/no-important"
          element={
            <NotesList
              data={data?.notes.filter(
                note => !note.important && !note.deleted
              )}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/important"
          element={
            <NotesList
              data={data?.notes.filter(note => note.important && !note.deleted)}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/deleted"
          element={
            <NotesList
              data={data?.notes.filter(note => note.deleted)}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
