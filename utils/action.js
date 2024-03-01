'use server'
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllTasks = async () =>{
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}


export const createTask = async (prevState,formData)=>{
    // await new Promise((resolve)=>{ setTimeout(resolve, 1000) })
    
    try {
        const content = formData.get('content');
        await prisma.task.create({
        data: {
            content: content
        }
    })
    revalidatePath('/tasks')
    return {message: 'success'}
    } catch (error) {
        console.log(error)
        return {message: 'error'}
    }
    
}

export const deleteTask = async ( prevState ,formData) =>{
   try {
    const id = formData.get('id');
    //  console.log(id)
        await prisma.task.delete({
            where: {
                id: id,
            }
        })
    
       revalidatePath('/tasks')
       return {message: 'success'}
   } catch (error) {
    return {message: 'error'}
   }

}

export const getTask = async (id) =>{

    const task =  await prisma.task.findUnique({
        where: {
            id,
        }
     })

     return task;
}

export const editTask = async (formData) =>{

    const id = formData.get('id');
    const content  = formData.get('content');
    const isCompleted = formData.get('isCompleted');
    console.log(isCompleted)

    await prisma.task.update({
        where: {
          id: id,
        },
        data: {
          content: content,
          completed: isCompleted === 'on' ? true : false,
        },
      });

    redirect('/tasks')
}