// react utilities
//import Storage from './store'
//import {BrowserRouter as link, router} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// logo assets

// components
import Header from './components/Header'

//views 
import Home from './views/index'
import Archive from './views/Archive'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask]= useState([])
  const [modal, setModal] = useState(true);
  const [edit, setEdit] = useState(false);
  const host = 'http://localhost:5000/tasks';

  // fetch API
  const getTasks = async ()=> {
    const tasksFromServer = await fetchTasks()
    setTask(tasksFromServer)
  }
  useEffect(()=>{
    getTasks()
  }, [])
  const fetchTasks = async (id) =>{
    const res = await fetch( id? `${host}/${id}?`: `${host}?_sort=dateTime`)
    return await res.json()
  }

  // Update task API
  const updateTask = async (id, data)=>{
    const res = await fetch(`${host}/${id}`,
      {
        method:'PUT',
        header:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      }
    )
    getTasks()
  }

  //delete task API
  const deletTask = async (id) => {
    await fetch(`${host}/${id}`,{
      method:"DELETE",
      headers:{
        'content-type':'application/json'
      }
    })
    setTask(tasks.filter((task)=>task.id !== id));
  }
  //toggle reminder
  const toggleRiminder = async (id) => {
    const taskToToggle = await fetchTasks(id);
    const task= await taskToToggle[0] ? taskToToggle[0]: taskToToggle
    task.reminder = !task.reminder
    return await updateTask(id,task)
  }

  const editTask = async(newTask)=>{
    const taskToEdit = await fetchTasks(newTask.id);
    const task= await taskToEdit[0] ? taskToEdit[0]: taskToEdit
    task.reminder = newTask.reminder
    task.text = newTask.text
    task.dateTime = newTask.dateTime
    return await updateTask(newTask.id,task)
  }
  const addTask = async (newTask)=>{
    if (newTask.text == ''){
      alert("Text field can't be empty!")
    }else{
      newTask.id = Math.floor(Math.random() * 0xfff * 1000000).toString(16);
      const res = await fetch( host, 
        {
          method:'POST',
          header:{
            "accept":"*/*",
            "User-Agent": "lanex (http://localhost:5173)",
            'content-type':'application/json'
          },
          body:JSON.stringify(newTask)
        }
      )
      const data = await res.json()
      getTasks()
      //setTask([ ...tasks, data ])
      setShowAddTask(false)
    }
    
  }

  //filter date for archive
    const taskExpired=(date)=>{
    const day = new Date();
    const today =new Date(day.getFullYear(), day.getMonth(), day.getDate())
    const taskDates = new Date(date)
    return (today > taskDates)
}
  
  return (
    
    <BrowserRouter>
    <div className="body">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
           <Home 
            tasks={tasks.filter((task)=>(!taskExpired(task.dateTime)))}
            showAddTask ={showAddTask} 
            setShowAddTask={setShowAddTask} 
            addTask={addTask}
            deletTask={deletTask}
            toggleRiminder={toggleRiminder}
            editTask={editTask}
            modal={modal}
            edit={edit}
            />
          </>
        }/>
        <Route path="/archive" element={<Archive
          tasks={tasks.filter((task)=>(taskExpired(task.dateTime)))}
          showAddTask ={showAddTask} 
          setShowAddTask={setShowAddTask} 
          addTask={addTask}
          deletTask={deletTask}
          toggleRiminder={toggleRiminder}
          editTask={editTask}
          modal={modal}
          edit={edit}
        />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
