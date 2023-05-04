// import { createSlice } from '@reduxjs/toolkit'
// import addCartSlice from './addCartSlice'

// const initialState = {
//   isNoteOpen: false,
//   id: undefined,
//   title: undefined,
//   text: undefined, 
//   items: addCartSlice.items
// }

// export const openNoteSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     clickNote(state, action){
//       state.isNoteOpen = true
//       state.id = action.payload
//       console.log(state.items)
//     },

//     clickSave(state, action){
//       state.isNoteOpen = false

//     }
//   },
// })

// export const { clickNote, clickClose } = openNoteSlice.actions

// export default openNoteSlice.reducer