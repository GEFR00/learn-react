import { useState } from 'react';
import './App.css'
import { CreateTaskList } from './components/CreateTaskList'
import { TaskList } from './components/TaskList';

function App() {

  const [taskList, setTaskList] = useState([])
  const [editingIndex, setEditingIndex] = useState(null);

  const createTask = (task) => {

    if(editingIndex !== null) {
      setTaskList(taskList.map((item, index) => index === editingIndex ? task : item));
      setEditingIndex(null);
    } else {
      setTaskList([...taskList, task]);
    }
  }

  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  }

  const handleEditIndexTask = (index) => {
    setEditingIndex(index);
  }


  return (
    <>
     <main className='App'>
        <h1>To-do-List</h1>

        <CreateTaskList
          createTask={createTask}/>

        <TaskList
          taskList={taskList} 
          deleteTask={deleteTask} 
          createTask={createTask}
          handleEditIndexTask={handleEditIndexTask}>
            { editingIndex !== null && <CreateTaskList createTask={createTask}/> }
        </TaskList>
     </main>
    </>
  )
}

export default App
