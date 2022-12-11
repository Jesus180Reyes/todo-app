import { FC } from "react"
import { TodoContent} from "./"
import { Pokemon } from '../../interface/pokemon';

interface Props{
  title:string,
  todos?: Pokemon[],
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
