import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import NotesList from '../components/notesList/NotesList'
import { useGetAllNotesQuery } from '../redux/slices/notesAPI'

const RoutesApp = () => {
  const { data, isLoading } = useGetAllNotesQuery()
  return (
    <BrowserRouter>
      <Header />
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
