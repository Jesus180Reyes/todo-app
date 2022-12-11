import { FC } from "react"
import { TodoContent } from "./TodoContent"

interface Props{
  title:string
}
export const TodoCard:FC<Props> = ({title}) => {
  return (
    <>
        <div className="todo-card">
          <h1>{title}</h1>
         <TodoContent/>
        </div>
    </>

  )
}
