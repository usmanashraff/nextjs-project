import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/action'
import Link from 'next/link';

const page = async ({params}) => {
    const id = params.id
    const task = await getTask(id);
  return (
      <>
      <Link href='/tasks' className='btn btn-primary mb-4' >Back to Tasks</Link>
      <EditForm task={task} />
    </>
  )
}

export default page