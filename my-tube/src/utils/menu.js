import {createSlice} from "@reduxjs/toolkit"

const appmenu = createSlice({
    name : 'appmenu',

    initialState: {
        menuOpen : true,
    },

    reducers: {
        toggleMenu: (state)=>{
            state.menuOpen = !state.menuOpen
        },
        closeMenu: (state)=>{
            state.menuOpen = false
        }
    }
})

export default appmenu.reducer;
export const {toggleMenu , closeMenu} = appmenu.actions