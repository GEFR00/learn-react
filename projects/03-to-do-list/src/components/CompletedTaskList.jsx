import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

export const CompletedTaskList = ({completedTasksList}) => {
  return (
    <section className='taskList-container'>
        <h1>Tareas realizadas:</h1>
        <ul className='taskList-list--completed'>
            {
                completedTasksList.map((task, index) => {
                    return <div className='taskList__content' key={index}>
                        <li 
                            className='taskList-task--completed'
                            key={index}>
                            <strong>
                                <AiOutlineCheck /> {task}
                            </strong>
                        </li>
                    </div>
                })
            }
        </ul>
    </section>
  )
}
