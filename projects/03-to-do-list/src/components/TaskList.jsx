import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit  } from 'react-icons/ai';
import { CreateTaskList } from './CreateTaskList';
import { CompletedTaskList } from './CompletedTaskList';

export const TaskList = ({ children, taskList, deleteTask, handleEditIndexTask }) => {

    const [editingIndex, setEditingIndex] = useState(null);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleEdit = (index) => {
        setEditingIndex(index);
        handleEditIndexTask(index);
    }

    const handleCompletedTask = (completeTask, index) => {
        setCompletedTasks([...completedTasks, completeTask]);
        deleteTask(index);
    }

  return (
    <>
        <section className='taskList-container'>
            <ul className='taskList-list'>
                {
                taskList.map((task, index) => {
                    return <div className='taskList__content' key={index}>
                        <aside>
                            <input 
                                onChange={() => handleCompletedTask(task, index)}
                                key={index} 
                                type='checkbox' />
                        </aside>
                        <li className='taskList-task' key={index}>
                            <strong>{task}</strong>
                            {editingIndex == index && children}
                        </li>
                        <aside className='taskList-actions'>
                            <button className='primary-btn-blue btn' onClick={() => handleEdit(index)}>
                                <AiFillEdit />
                            </button>
                            <button className='secondary-btn btn' onClick={ () => deleteTask(index) }>
                                <AiFillDelete />
                            </button>
                        </aside>
                    </div>
                })
                }
            </ul>
        </section>
        { completedTasks.length > 0 && <CompletedTaskList completedTasksList={completedTasks} /> }

    </>
  )
}
