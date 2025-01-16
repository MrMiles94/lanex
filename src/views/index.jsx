
import {  FaArchive} from "react-icons/fa";
import { Link } from 'react-router-dom'

import Tittle from '../components/Tittle'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
const Home =({tasks, showAddTask, setShowAddTask, addTask, deletTask, toggleRiminder,editTask})=>{
    return (
        <>
        <div className='container-fluid'>
        <div className="container default-border">
        <Tittle title='Task Tracker' 
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        />
        {showAddTask&&<AddTask onAddTask = {addTask}/>}
        <div className='tasks'>
            <Tasks tasks={tasks} 
            onDelete={deletTask} 
            onToggle={toggleRiminder}
            onEditTask={editTask}
            />
        </div> 
        { (tasks.length === 0) &&<h2>NO Task to show</h2>}
        </div>
      </div>
      
        <div className="container-fluid">
            <Link className='btn text-center font-large' to="archive"> 
            
            <FaArchive/>
            </Link>
        </div>
                  
        </>
    )
}
export default Home