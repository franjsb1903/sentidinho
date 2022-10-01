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
      providesTags: ['Post' as never],
    }),
    postNewNote: builder.mutation<INote, Partial<INote>>({
      query: body => ({
        url: import.meta.env.VITE_CREATE_NEW_NOTE_PATH,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post' as never],
    }),
  }),
})

export const { useGetAllNotesQuery, usePostNewNoteMutation } = notesApi
