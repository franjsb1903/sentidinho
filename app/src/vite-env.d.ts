/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string

  readonly VITE_API_NOTES_BASE_URL: string
  readonly VITE_GET_ALL_NOTES_PATH: string
  readonly VITE_CREATE_NEW_NOTE_PATH: string
  readonly VITE_PUT_IMPORTANCE_PATH: string
  readonly VITE_DELETE_NOTE_PATH: string
  readonly VITE_DELETE_NOTE_FOREVER_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
