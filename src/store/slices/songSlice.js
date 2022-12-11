import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songs: [],
}

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSongs: ( state, action ) => {
        state.songs = action.payload
    }
  },
})

export const { setSongs } = songSlice.actions