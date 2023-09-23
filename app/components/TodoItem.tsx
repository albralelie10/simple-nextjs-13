"use client"
import { Todo } from '@prisma/client'
import React, { useTransition } from 'react'
import { deleteTodoAction, toggleTodoAction } from './_actions'

export const TodoItem = (props:Todo) => {
   let [isPending, startTransition]= useTransition()
  return (
    <li className='flex gap-3 items-center'>
        <input
        id={props.id}
        type="checkbox"
        className='peer  '
        defaultChecked={props.complete}
        onChange={(e)=>startTransition(()=>toggleTodoAction(props.id,e.target.checked))}
        />
        <label 
        htmlFor={props.id}
        className="peer-checked:text-slate-400 peer-checked:line-through mr-3  ">
            {props.title}
        </label>
        <button
        onClick={()=>startTransition(()=>deleteTodoAction(props.id))}
        className='p-4 bg-red-600 rounded-lg '
        >Remove</button>
    </li>
  )
}
