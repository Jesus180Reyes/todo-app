import { FC } from 'react';
import { Pokemon } from '../../interface/pokemon';
  interface Props {
    todos?:Pokemon[],
}
export const TodoContent:FC<Props>= ({todos}) => {
  return (
    <>
   
          <div className="todo-content">
            {
              todos?.map(todo => {
                return  <div key={todo.id} className="todo-listile">
                <p >{todo.name}</p>
                <input type="radio" name="flexRadioDefault"/>
              </div> 
            
              })
            }
          
          </div>
    </>
  )
}
