import prisma from "@/utils/db"


const prismaHandlers = async () =>{
  // await prisma.task.create({
  //   data:{
  //     content: 'wake up',
  //   }
  // });

  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAt: 'desc',
    }
  })
  if(allTasks.length === 0)
  return null
  return allTasks;
}
const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className='text-3xl font-bold'>Prisma Example</h1>
      <ul className='menu menu-vertical'>
        {tasks.map((task)=>{
          return <h1 key={task.id}> {task.content} </h1>
        })}
      </ul>
    </div>
  )
}

export default PrismaPage