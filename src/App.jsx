// react utilities
//import Storage from './store'
//import {BrowserRouter as link, router} from 'react-router-dom'
import { useState, useEffect } from 'react'

// logo assets
import lanexLogo from './assets/Lanex_logo.png'

// components
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask]= useState([])
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
  // Update API
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
    return await res.json()
    
    
  }

  //delete task
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
  const addTask = async (newTask)=>{
    let id = Math.floor(Math.random() * 0xfff * 1000000).toString(16);
    newTask.id = id;
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
  

  return (
    <div className='container'>
      <Header title='Task Tracker' 
      showAddTask={showAddTask}
      setShowAddTask={setShowAddTask}
      />
      {showAddTask&&<AddTask onAddTask = {addTask}/>}
      <div className='tasks'>
          <Tasks tasks={tasks} 
          onDelete={deletTask} 
          onToggle={toggleRiminder}
          />
      </div>
      {/* <link to='about' component={About}></link> */}
      
    </div>
  )
}

export default App
