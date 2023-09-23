import { getTodos } from '@/lib/todos'
import Image from 'next/image'
import { TodoItem } from './components/TodoItem'
import { Todo } from '@prisma/client'
import CreateTodoForm from './components/CreateTodo'

export default async function Home() {

  const todos=await getTodos() as any
  return (
   <div className='container'>
    <h1 className='text-2xl'>Todos</h1>
    <CreateTodoForm/>
    <div className='hr'></div>
    <h3 className='text-2xl'>Old Todos</h3>
    <ul className='flex flex-col gap-3'>
      {todos?.map((todo:Todo)=>(<TodoItem key={todo.id} {...todo}/>))}
    </ul>
   </div>
  )
}
