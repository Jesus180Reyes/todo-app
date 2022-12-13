import { useEffect, useState } from "react";
import { serverUrl } from '../api/serverurl';
import { TodoResponse } from '../interface';

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoResponse>();
    const [todosInProgress, setTodosInProgress] = useState<TodoResponse>();
    const [todosInDone, setTodosInDone] = useState<TodoResponse>()
    const [statusCode, setstatusCode] = useState<number>()
    const [onErrorMessage, setOnErrorMessage] = useState<string>()

    const getTodosTask = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get(`/todos`);
      setstatusCode(resp.request.status);
      setOnErrorMessage(resp.request.statusText);
      const data:TodoResponse = await resp.data
      setTodos(data);
      return data 
  }

    const getTodosInProgress = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get("/inProgress");
      setstatusCode(resp.status);
      setOnErrorMessage(resp.request.statusText);
      const data:TodoResponse =  await resp.data;
      setTodosInProgress(data);
      return data 
    }

    const getTodosInDone = async():Promise<TodoResponse>=> {
      const resp = await serverUrl.get("/done");
      setstatusCode(resp.status);
      setOnErrorMessage(resp.request.statusText);
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
    todosInProgress,
    statusCode,
    onErrorMessage
    //* Metodos
  }
}
