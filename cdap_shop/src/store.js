import { configureStore, createSlice } from "@reduxjs/toolkit";

import user from "./store/userSlice";

// let user = createSlice({
//     name : 'user',
//     initialState : {name : 'asj', age : 29},
//     reducers:{
//         changeName(state){
//             // return `An seung ji's initial is ${state}` 
//             state.name = 'An seung ji'
//         },
//         plusAge(state, action){
//             state.age += action.payload
//         }
//     }
// })

// export let { changeName, plusAge } = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [12,10,100]
})
let inCart = createSlice({
    name : 'inCart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
}) 


export default configureStore({
    reducer:{
        user : user.reducer,
        stock : stock.reducer,
        inCart : inCart.reducer
    }
})