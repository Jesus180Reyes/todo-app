import { FC } from "react"
import { TodoContent} from "./"
import { TodoResponse } from '../../interface';

interface Props{
  title:string,
  todos?: TodoResponse,
  onChangeTodo?:any,
  isCheckbox: boolean
}
export const TodoCard:FC<Props> = ({title,todos,onChangeTodo,isCheckbox}) => {
  return (
    <>
        <div className="todo-card">
          <h1>{title}</h1>
         <TodoContent todos={todos} onChangeTodo={onChangeTodo} isCheckbox={isCheckbox}/>
        </div>
    </>

  )
}
