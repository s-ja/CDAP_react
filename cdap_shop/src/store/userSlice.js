import { createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name : 'user',
    initialState : {name : 'asj', age : 29},
    reducers:{
        changeName(state){
            // return `An seung ji's initial is ${state}` 
            state.name = 'An seung ji'
        },
        plusAge(state, action){
            state.age += action.payload
        }
    }
})

export let { changeName, plusAge } = user.actions

export default user