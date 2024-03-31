import {createSlice} from "@reduxjs/toolkit"

const appmenu = createSlice({
    name : 'appmenu',

    initialState: {
        menuOpen : true,
    },

    reducers: {
        toggleMenu: (state)=>{
            state.menuOpen = !state.menuOpen
        }
    }
})

export default appmenu;