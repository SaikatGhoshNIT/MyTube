import {configureStore} from "@reduxjs/toolkit"
import appmenu from "./menu"

const store = configureStore({
    reducer:{
        app : appmenu
    }
})

export default store