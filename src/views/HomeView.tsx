import { TodoCard } from "../components/todo"
import { useTodos } from '../hooks';

export const HomeView = () => {
 const {todos,todosInDone,todosInProgress,statusCode} = useTodos();
  
  if(statusCode !== 200) return <h1 style={{color:"white"}}>Error: Network Error</h1>
  
  return (
    <>  
    <h1 style={{color:"#fff"}}>TODO App</h1>
    <div className="form-container">
    <form >

    <input type="text" placeholder="Agregar una tarea:"/>
    <button className="btn-mark">Marcar</button>
    </form>
    </div>
    <div className="todo">
     <TodoCard title="TODO" todos={todos}/>
     <TodoCard title="In Progress" todos={todosInProgress} />
     <TodoCard title="DONE" todos={todosInDone}/>
     </div>
    </>
  )
}
