"use server"

import { createTodo,deleteTodo,toggleTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache"

export  async function createTodoAction(title:string){
    await createTodo(title)
     revalidatePath("/")
}

export  async function toggleTodoAction(id:string,complete:boolean){
    await toggleTodo(id,complete)
    revalidatePath("/")
}

export async function deleteTodoAction(id:string){
    await deleteTodo(id)
    revalidatePath("/")
}