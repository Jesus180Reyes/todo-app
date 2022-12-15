import { useEffect, useState } from "react";
import { serverUrl } from '../api/serverurl';
import { TodoResponse } from '../interface';

export const useTodos = () => {
    const [inputChange, setInputChange] = useState<string>("");
    const [onChangeValueRadio, setOnChangeValueRadio] = useState<string>("");
    const [onChangeRadioInProgress, setOnChangeRadioInProgress] = useState<string>("");
    const [onErrorMessage, setOnErrorMessage] = useState<string>()
    const [statusCode, setstatusCode] = useState<number>()
    const [onDisabledButton, setOnDisabledButton] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoResponse>();
    const [todosInProgress, setTodosInProgress] = useState<TodoResponse>();
    const [todosInDone, setTodosInDone] = useState<TodoResponse>()

    const getTodosTask = async()=> {
      try {
        setIsLoading(true);
        const resp = await serverUrl.get<TodoResponse>(`/todos`);
        setstatusCode(resp.request.status);
        setOnErrorMessage(resp.request.statusText);
        const data:TodoResponse = await resp.data
        setTodos(data);
        setIsLoading(false);
        return data 
      } catch (error:any) {
        console.log(error);
        setOnErrorMessage(error.config.message);
        setIsLoading(false);
        return error
      }
  }

    const getTodosInProgress = async():Promise<TodoResponse>=> {
      try {
        setIsLoading(true)
      const resp = await serverUrl.get<TodoResponse>("/inProgress");
      setstatusCode(resp.status);
      setOnErrorMessage(resp.request.statusText);
      const data:TodoResponse =  await resp.data;
      setTodosInProgress(data);
      setIsLoading(false);
      return data 
      } catch (error:any) {
        console.log(error);
        setIsLoading(false);
        return error
      }
      
    }

    const getTodosInDone = async():Promise<TodoResponse>=> {
      try {
        
        setIsLoading(true)
        const resp = await serverUrl.get<TodoResponse>("/done");
        setstatusCode(resp.status);
        setOnErrorMessage(resp.request.statusText);
        const data:TodoResponse =  resp.data
        setTodosInDone(data);
        setIsLoading(false);
        return data 
      } catch (error:any) {
        console.log(error);
        setIsLoading(false);
        return error
      }
    }
    
    const postTodo = async(title:string):Promise<TodoResponse>=> {
     try {
      const {data} = await serverUrl.post<TodoResponse>("/todos",{
        title: title
      });
      console.log(data);
      return data
     } catch (error:any) {
      console.log(error);
      return error;
      
     }
    }

    const postInProgressTodo = async(id:string)=> {
      try {
        const {data}  = await serverUrl.post(`/inProgress/${id}`);
        console.log(data);
        return data
      } catch (error:any) {
        console.log(error.message);
        return error
      }
    }
    const postInDoneTodo = async(id:string)=> {
      try {
        const {data}  = await serverUrl.post(`/done/${id}`);
        console.log(data);
        return data
      } catch (error:any) {
        console.log(error.message);
        return error
      }
    }
    const onClickMarkInProgress = ()=> {
      postInProgressTodo(onChangeValueRadio);
    }
    const onClickMarkDone = ()=> {
      postInDoneTodo(onChangeRadioInProgress);
    }

    const onInputTargetChange = (e:any)=> {
      setInputChange(e.target.value);
      setOnDisabledButton(false);
     }

    const onSubmit = ()=> {
        if(inputChange.length <= 2) return;
        postTodo(inputChange);
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
    onDisabledButton,
    todos,
    todosInDone,
    todosInProgress,
    isLoading,
    statusCode,
    onErrorMessage,
    //* Metodos
    onInputTargetChange,
    setOnChangeValueRadio,
    setOnChangeRadioInProgress,
    setOnDisabledButton,
    onClickMarkDone,
    postTodo,
    postInProgressTodo,
    onClickMarkInProgress,
    onSubmit,
    postInDoneTodo,
  }
}
