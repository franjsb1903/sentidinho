import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DarkmodeState {
  darkmode: boolean
}

const initialState: DarkmodeState = {
  darkmode: true,
}

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    changeMode: state => {
      state.darkmode = !state.darkmode
    },
  },
})

export const { changeMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer
