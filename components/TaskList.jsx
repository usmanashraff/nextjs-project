
import TaskDelete from "./TaskDelete";
import Link from "next/link";
import { getAllTasks } from "@/utils/action";
const TaskList = async () => {

    const tasks = await getAllTasks();

    if(tasks.length === 0){
        return <h1 className='my-10'> No tasks yet... </h1>
    }

  return (
    <div>
        {tasks.map((task)=>{
            return (
                <div className='flex justify-between items-center px-4 py-6  border border-base-400 rounded-lg shadow-lg my-4' key={task.id}>
                    <h2 className={ task.completed? 'line-through': null }> {task.content} </h2>

                    <div className='flex gap-6 items-center'> 
                        <Link className='btn btn-accent btn-xs' href={`tasks/${task.id}`} >
                            edit
                        </Link>
                        <TaskDelete id={task.id} />

                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TaskList