'use client'
import { deleteTask } from '@/utils/action'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import {useFormState} from 'react-dom'

const initState ={
  message: null,
}

const SubmitButton = () =>{
  return  <button type='submit' className='btn btn-error btn-xs'>delete </button>

}

const TaskDelete = ({id}) => {
  const [state, deleteForm] = useFormState(deleteTask, initState);

  useEffect(()=>{
    if(state.message === 'error'){
      toast.error('Error in deleting task')
      return;
    }
    if(state.message){
      toast.success('Task deleted successfully')

    }
  }, [state])

  return (
    <form action={deleteForm}>
      <input type="hidden" value={id} name='id' />
      <SubmitButton />
    </form>
  )
}

export default TaskDelete