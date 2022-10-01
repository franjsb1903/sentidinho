/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string

  readonly VITE_API_NOTES_BASE_URL: string
  readonly VITE_GET_ALL_NOTES_PATH: string

  readonly VITE_CREATE_NEW_NOTE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
