import { TodoCard } from "../components/todo"
import { useTodos } from '../hooks';

export const HomeView = () => {
 const {todos,todosInDone,todosInProgress,statusCode,isLoading,onDisabledButton,onSubmit,setOnChangeRadioInProgress,onClickMarkDone,onInputTargetChange,setOnDisabledButton,setOnChangeValueRadio,onClickMarkInProgress} = useTodos();

  const onChangeValueTodo = (e:any)=> {
    setOnDisabledButton(false);
    setOnChangeRadioInProgress("");
    setOnChangeValueRadio(e.target.value);
  }
  const onChangeValueInProgress = (e:any)=> {
    setOnDisabledButton(true)
    setOnChangeValueRadio("");
    setOnChangeRadioInProgress(e.target.value);
  }

  if(isLoading) return (<h1 style={{color:"white"}}>Cargando...</h1>)
  if(statusCode !== 200) return  (<h1 style={{color:"white"}}>Error: Network Error</h1>)  
  return (
    <>  
    <h1 style={{color:"#fff"}}>TODO App</h1>
    <div className="form-container">
    <form onSubmit={onSubmit} >

    <input type="text" placeholder="Agregar una tarea:" onChange={onInputTargetChange} />
    <button style={{display:`${onDisabledButton? "none":""}`}} className="btn-mark" onClick={onClickMarkInProgress} disabled={onDisabledButton}>Marcar</button>
    <button style={{display:`${!onDisabledButton? "none":""}`}} className="btn-inProgress" onClick={onClickMarkDone} >Marcar</button>
    </form>
    </div>
    <div className="todo" >
     <TodoCard title="TODO" todos={todos} onChangeTodo={onChangeValueTodo}/>
     <TodoCard title="In Progress" todos={todosInProgress} onChangeTodo={onChangeValueInProgress}/>
     <TodoCard title="DONE" todos={todosInDone} />
     </div>
    </>
  )
}
