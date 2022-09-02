import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {display:"none"},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAstra: (state) => {
      
      state.value = {backgroundImage:"url('./opel-astra.jpg')", display:"block"}
    },
    setBMW: (state) => {
      state.value = {backgroundImage:"url('./bmw-745e.jpg')", display:"block"}
    },
    setGolf: (state) => {
        state.value = {backgroundImage:"url('./volkswagen-golf.jpg')", display:"block"}
    },
    setAudi: (state) => {
        state.value = {backgroundImage:"url('./audi-a3.jpg')", display:"block"}
    },
    setTroc: (state) => {
        state.value = {backgroundImage:"url('./vw-troc.jpg')", display:"block"}
    },
    closeImage: (state) => {
        state.value = {display:"none"}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAstra, setBMW, setGolf, setAudi, setTroc, closeImage } = counterSlice.actions

export default counterSlice.reducer