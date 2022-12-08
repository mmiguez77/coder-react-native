import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songs: [],
}

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSongs: ( state, action ) => {
      console.log(action.payload)
        state.songs = action.payload
    }
  },
})

export const { setSongs } = songSlice.actions