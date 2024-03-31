import {configureStore} from "@reduxjs/toolkit"
import appmenu from "./menu"

const store = configureStore({
    reducer:{
        menu : appmenu
    }
})

export default store