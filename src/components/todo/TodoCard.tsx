import { FC } from "react"
import { TodoContent} from "./"
import { TodoResponse } from '../../interface';

interface Props{
  title:string,
  todos?: TodoResponse,
}
export const TodoCard:FC<Props> = ({title,todos}) => {
  return (
    <>
        <div className="todo-card">
          <h1>{title}</h1>
         <TodoContent todos={todos}/>
        </div>
    </>

  )
}
