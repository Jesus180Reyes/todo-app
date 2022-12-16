import { TodoCard } from "../components/todo"
import { useTodos } from '../hooks';

export const HomeView = () => {
 const {todos,todosInDone,todosInProgress,onDisabledButton,isChangeValueDelete,onClickMarkDeleteTodo,setIsChangeValueDelete,onSubmit,setOnChangeRadioInProgress,onClickMarkToDone,onInputTargetChange,setOnDisabledButton,setOnChangeValueRadio,onClickMarkToInProgress} = useTodos();
 
  const onChangeValueTodo = (e:any)=> {
    setIsChangeValueDelete(true);
    setOnDisabledButton(false);
    setOnChangeRadioInProgress("");
    setOnChangeValueRadio(e.target.value);
  }
  const onChangeValueInProgress = (e:any)=> {
    setIsChangeValueDelete(false);
    setOnDisabledButton(true)
    setOnChangeValueRadio("");
    setOnChangeRadioInProgress(e.target.value);
  }
  return (
    <>  
    <h1 style={{color:"#fff"}}>TODO App</h1>
    <div className="form-container">
    <form onSubmit={onSubmit} >
    <input type="text" placeholder="Agregar una tarea: (Presiona Enter para Crear)" onChange={onInputTargetChange} />
    <button style={{display:`${onDisabledButton? "none":""}`}} className="btn-mark" onClick={onClickMarkToInProgress} disabled={onDisabledButton}>Marcar en Progreso</button>
    <button style={{display:`${!onDisabledButton? "none":""}`}} className="btn-inProgress" onClick={onClickMarkToDone} >Marcar Terminado</button>
    <button style={{display:`${!isChangeValueDelete? "none":""}`}} className="btn-delete" onClick={onClickMarkDeleteTodo}>Borrar</button>
    </form>
    </div>
    <div className="todo" >
     <TodoCard title="TODO" todos={todos} onChangeTodo={onChangeValueTodo} isCheckbox={true}/>
     <TodoCard title="In Progress" todos={todosInProgress} onChangeTodo={onChangeValueInProgress} isCheckbox={true}/>
     <TodoCard title="DONE" todos={todosInDone} isCheckbox={false}/>
     </div>
    </>
  )
}
