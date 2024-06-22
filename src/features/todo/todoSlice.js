import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}  // we make a "todos" array here and store in initialState



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
        // jab addTodo karoge tab "state, action" dono actomatic milega    
        //todo ka id, text(kya todo me likha he) "action" se milta he
            const todo = {
                id: nanoid(), //nanoid() aek new id dega
                text: action.payload // action.payload ke pass id & text hota he, idhar text text: me store hoga
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // yahape action.payload se id leke match kiya he
            //filter aek naya array pass kare ga jisme delete wala todo nahi hoga
            // vo naya array ,todo array me update ho jayega.
        },
    }
})
// 2 step me slice/redux reducer export hotahe
export const {addTodo, removeTodo} = todoSlice.actions  //"addTodo, removeTodo" required component me pass hoga

export default todoSlice.reducer // har reducer ko store.js me export karna padega, nahito store update nahi hoda  
