"use client"

import React, { useRef } from 'react'
import {createTodoAction} from './_actions'

 const CreateTodoForm = () => {
    const formRef=useRef<HTMLFormElement>(null)

    async function action(data:FormData){
        const title=data.get("title")?.valueOf()
        if(!title || typeof title !== "string"){
            throw new Error("Invalid Title")
        }
        await createTodoAction(title)
        formRef.current?.reset()
    }


  return (
    <form ref={formRef} action={action} className='flex flex-col  gap-3  mb-4'>
        <h2>Create a new Todo</h2>
        <div className='flex gap-3'>
        <input
        type="text"
        placeholder='add task ...'
        name="title"
        className=''
        />
        <button type="submit" className='p-3 rounded-lg bg-teal-200'>Add Todo</button>
        </div>
    </form>
  )
}

export default CreateTodoForm;
