import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  useDispatch as useDispatchRedux,
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
} from 'react-redux'
import { notesApi } from './slices/notesAPI'
import darkmode from './slices/darkmode'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['darkmode'],
}

const reducer = combineReducers({
  [notesApi.reducerPath]: notesApi.reducer,
  darkmode,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(notesApi.middleware),
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = useDispatchRedux
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux
