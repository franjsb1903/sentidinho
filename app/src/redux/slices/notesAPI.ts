import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INote } from '../../types/INote'

export const notesApi = createApi({
  reducerPath: 'notes',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_API_NOTES_BASE_URL
    }`,
  }),
  endpoints: builder => ({
    getAllNotes: builder.query<{ notes: INote[] }, void>({
      query: () => import.meta.env.VITE_GET_ALL_NOTES_PATH,
      providesTags: ['note-mutation' as never],
    }),
    postNewNote: builder.mutation<{}, Partial<INote>>({
      query: body => ({
        url: import.meta.env.VITE_CREATE_NEW_NOTE_PATH,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['note-mutation' as never],
    }),
    putChangeImportance: builder.mutation<{}, number>({
      query: id => ({
        url: `${import.meta.env.VITE_PUT_IMPORTANCE_PATH}/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['note-mutation' as never],
    }),
    deleteNote: builder.mutation<{}, number>({
      query: id => ({
        url: `${import.meta.env.VITE_DELETE_NOTE_PATH}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['note-mutation' as never],
    }),
    deleteNoteForever: builder.mutation<{}, number>({
      query: id => ({
        url: `${import.meta.env.VITE_DELETE_NOTE_FOREVER_PATH}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['note-mutation' as never],
    }),
  }),
})

export const {
  useGetAllNotesQuery,
  usePostNewNoteMutation,
  usePutChangeImportanceMutation,
  useDeleteNoteMutation,
  useDeleteNoteForeverMutation,
} = notesApi
