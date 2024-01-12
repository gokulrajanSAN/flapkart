import { createSlice } from '@reduxjs-toolkit'

const initialState = { item: "" }

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state['item'] = action
        },
        removeFromCart: (state, action) => {
            state.item[action]
        }
    }
})

export const { addToCart, removeFromCart} = cartSlice.action
export default cartSlice.reducer