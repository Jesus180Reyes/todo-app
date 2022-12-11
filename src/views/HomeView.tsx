import { TodoCard } from "../components/todo/TodoCard"

export const HomeView = () => {
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
     <TodoCard title="TODO"/>
     <TodoCard title="In Progress"/>
     <TodoCard title="DONE"/>
     </div>
    </>
  )
}
