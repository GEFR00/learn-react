import React, { useState } from 'react'
import { AiOutlineEnter } from "react-icons/ai";

export const CreateTaskList = ({ createTask }) => {

    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!task.trim()) return;
        createTask(task);
        setTask("");
    }

  return (
    <section className="createElement-container">
        <form className="createElement-form" onSubmit={handleSubmit}>

            <input 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="createElement-input"
                type="text"
                placeholder="Escriba su nueva tarea" />

            <button type="submit" className="primary-btn btn">
                <AiOutlineEnter />
            </button>
        </form>

     
    </section>
  )
}
