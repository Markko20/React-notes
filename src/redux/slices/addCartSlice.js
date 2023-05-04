import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addActive:false,
  items: [], 
  id: 0,
  idNow: undefined,
  isNoteOpen: false,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clickPlus(state){
      state.addActive = true
    }, 

    clickClose(state){
      state.addActive = false
      state.isNoteOpen = false
    },

    clickAdd(state, action){
      state.addActive = false
      state.items.push(action.payload)
      state.id++
    },

    clickNote(state, action){
      state.isNoteOpen = true
      state.idNow = action.payload
    },

    clickChange(state, action){
      state.items.map(obj => {
        if(obj.id === action.payload.id) {
          if(action.payload.title != '' || action.payload.text != ''){
            obj.title = action.payload.title
            obj.text = action.payload.text
            state.isNoteOpen = false
          }
        }
      })

    }
  },
})

export const { clickPlus, clickClose, clickAdd, clickNote, clickChange } = CartSlice.actions

export default CartSlice.reducer