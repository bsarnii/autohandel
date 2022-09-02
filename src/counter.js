import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {display:"none"},
  value2: {}
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAstra: (state) => {
      
      state.value = {backgroundImage:"url('./opel-astra.jpg')", display:"block"}
      state.value2= {filter:"blur(2px)"}
    },
    setBMW: (state) => {
      state.value = {backgroundImage:"url('./bmw-745e.jpg')", display:"block"}
      state.value2= {filter:"blur(2px)"}
    },
    setGolf: (state) => {
        state.value = {backgroundImage:"url('./volkswagen-golf.jpg')", display:"block"}
        state.value2= {filter:"blur(2px)"}
    },
    setAudi: (state) => {
        state.value = {backgroundImage:"url('./audi-a3.jpg')", display:"block"}
        state.value2= {filter:"blur(2px)"}
    },
    setTroc: (state) => {
        state.value = {backgroundImage:"url('./vw-troc.jpg')", display:"block"}
        state.value2= {filter:"blur(2px)"}
    },
    closeImage: (state) => {
        state.value = {display:"none"}
        state.value2= {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAstra, setBMW, setGolf, setAudi, setTroc, closeImage } = counterSlice.actions

export default counterSlice.reducer