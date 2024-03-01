import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
import { revalidatePath } from 'next/cache'
export const dynamic = 'force-dynamic'
const TasksPage = () => {
  revalidatePath('/tasks')
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default TasksPage