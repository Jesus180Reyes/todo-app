import { FC } from "react"
import { TodoContent} from "./"
import { TodoResponse } from '../../interface';

interface Props{
  title:string,
  todos?: TodoResponse,
  onChangeTodo?:any
}
export const TodoCard:FC<Props> = ({title,todos,onChangeTodo}) => {
  return (
    <>
        <div className="todo-card">
          <h1>{title}</h1>
         <TodoContent todos={todos} onChangeTodo={onChangeTodo}/>
        </div>
    </>

  )
}
