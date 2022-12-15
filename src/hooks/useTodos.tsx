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
    const [isChangeValueDelete, setIsChangeValueDelete] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoResponse>();
    const [todosInProgress, setTodosInProgress] = useState<TodoResponse>();
    const [todosInDone, setTodosInDone] = useState<TodoResponse>()

    const getTodosTask = async():Promise<TodoResponse>=> {
      try {
        setIsLoading(true);
        const resp = await serverUrl.get<TodoResponse>(`/todos`);
        setstatusCode(resp.request.status);
        setOnErrorMessage(resp.request.statusText);
        const data:TodoResponse =  resp.data
        setTodos(data);
        setIsLoading(false);
        return data 
      } catch (error:any) {
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
      const data:TodoResponse =   resp.data;
      setTodosInProgress(data);
      setIsLoading(false);
      return data 
      } catch (error:any) {
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
        setIsLoading(false);
        return error
      }
    }
    
    const postTodo = async(title:string):Promise<TodoResponse>=> {
     try {
      const {data} = await serverUrl.post<TodoResponse>("/todos",{
        title: title
      });
      return data
     } catch (error:any) {
      return error;
      
     }
    }

    const postInProgressTodo = async(id:string)=> {
      try {
        const {data}  = await serverUrl.post<TodoResponse>(`/inProgress/${id}`);
        return data
      } catch (error:any) {
        return error
      }
    }

    const postInDoneTodo = async(id:string)=> {
      try {
        const {data}  = await serverUrl.post<TodoResponse>(`/done/${id}`);
        return data
      } catch (error:any) {
        return error
      }
    }
    
    const deleteTodo = async(todo:string,id:string)=> {
    try {
      const {data} = await serverUrl.delete(`/${todo}/${id}`); 
      return data
    } catch (error:any) {
      return error
    }
    }

    const onClickMarkToInProgress = ()=> {
      postInProgressTodo(onChangeValueRadio);
    }
    const onClickMarkToDone = ()=> {
      postInDoneTodo(onChangeRadioInProgress);
    }
    const onClickMarkDeleteTodo = ()=> {
      deleteTodo("todos",onChangeValueRadio);
    }

    const onInputTargetChange = (e:any)=> {
      setInputChange(e.target.value);
      setOnDisabledButton(false);
      setIsChangeValueDelete(false);
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
    isChangeValueDelete,
    //* Metodos
    onInputTargetChange,
    setOnChangeValueRadio,
    setOnChangeRadioInProgress,
    setOnDisabledButton,
    onClickMarkToDone,
    postTodo,
    postInProgressTodo,
    deleteTodo,
    onClickMarkToInProgress,
    onSubmit,
    postInDoneTodo,
    setIsChangeValueDelete,
    onClickMarkDeleteTodo,
  }
}
