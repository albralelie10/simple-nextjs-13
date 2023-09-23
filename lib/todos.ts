import prisma from "./prisma"

export async function getTodos(){
    try{
        const todos= await prisma.todo.findMany()
        return todos
    }catch(err){
        return err
    }    
}
export async function createTodo(title:string){
    try{
        const todo=await prisma.todo.create({data:{title}})
        return todo;
    }catch(err){
        return err
    }
}

export async function toggleTodo(id:string,complete:boolean){
    try{
        const updateTodo=await prisma.todo.update({
            where:{
                id,
            },
            data:{
                complete
            }
        })
        return updateTodo
    }catch(err){
        return err
    }
}

export async function deleteTodo(id:string){
    try{
       const deleteTodo = await prisma.todo.delete({
            where:{
                id
            }
        })
        return deleteTodo
    }catch(err){
        return err
    }
}