import { useEffect, useState } from "react";
import { serverUrl } from '../api/serverurl';
import { TodoResponse } from '../interface/todoResponse';

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoResponse>();
    const [todosInProgress, setTodosInProgress] = useState<TodoResponse>();
    const [todosInDone, setTodosInDone] = useState<TodoResponse>()

    const getTodosTask = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get(`/todos`);
      const data:TodoResponse = await resp.data
      setTodos(data);
      return data 
  }

    const getTodosInProgress = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get("/inProgress");
      const data:TodoResponse =  await resp.data;
      setTodosInProgress(data);
      return data 
    }

    const getTodosInDone = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get("/done");
      const data:TodoResponse =  resp.data
      setTodosInDone(data);
      return data 
    }
    useEffect(() => {
      getTodosTask();
    
      
    }, []);
    useEffect(() => {
      getTodosInProgress();
      
    }, []);
    useEffect(() => {
      getTodosInDone();
    
      
    }, []);
  return {
    // * Propiedades
    todos,
    todosInDone,
    todosInProgress
    //* Metodos
  }
}
