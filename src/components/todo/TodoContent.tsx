import { FC } from 'react';
import { TodoResponse } from '../../interface/todoResponse';
import { timeSince } from '../../helpers/timeSince';
  interface Props {
    todos?:TodoResponse,
    onChangeTodo?: any,
    isCheckbox: boolean
}
export const TodoContent:FC<Props>= ({todos,onChangeTodo,isCheckbox}) => {
  return (
    <>
   
          <div className="todo-content">
            {
              todos?.todos.map(todo => {
                return <div key={todo._id} className={"timeSince"} >
                  <p style={{textAlign:"start", marginLeft:"20px"}  }>Creado hace: {timeSince(todo.createdAt.toString())}</p>
                  <hr/>
                <div key={todo._id} className="todo-listile">
                <p >{todo.title}</p>
                {
                  isCheckbox 
                  ? <input type="radio"  name="flexRadioDefault" value={todo._id} onChange={onChangeTodo}/>
                  : undefined
                }
                </div>
                </div>  
              })
              
            }

          
          </div>
    </>
  )
}
 