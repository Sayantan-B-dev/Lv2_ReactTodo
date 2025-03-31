import { useState,useEffect } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// const initialTodos = [
//     { id: 1, text: "sleep", completed: false },
//     { id: 2, text: "eat", completed: false },
//     { id: 3, text: "code", completed: false },
//     { id: 4, text: "exercise", completed: false },
//     { id: 5, text: "read", completed: false },
//     { id: 6, text: "write", completed: false },
//     { id: 7, text: "meditate", completed: false },
//     { id: 8, text: "relax", completed: false },
// ];
const getInitialTodos=()=>{
    const data =JSON.parse(localStorage.getItem("todos"))
    if(!data) return []
    return data
}

export default function TodoList(){
    const [todos,setTodos]=useState(getInitialTodos)//AI
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);//Ai
    const removeTodo=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.filter(t=>t.id!==id)
        })
    }
    const toggleTodo=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.map(todo=>{
                if(todo.id===id){
                    return {...todo,completed:!todo.completed}
                }else{
                    return todo
                }
            })
        })
    }
    const addTodo=(text)=>{
        setTodos((prevTodo)=>{
            return  [...prevTodo,{text:text,id:crypto.randomUUID(),complete:false}]
        })
    }
    
    return (
        <Box
        sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            m:1,
        }}
        >   
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}> 
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo=>
                    <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    remove={removeTodo} 
                    toggle={toggleTodo}/>
                )}
                <TodoForm addTodo={addTodo}/>
            </List>
        </Box>
    )
}