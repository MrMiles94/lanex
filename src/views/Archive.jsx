import {Link} from 'react-router-dom'
import { FaArrowLeft} from 'react-icons/fa'

import Tasks from '../components/Tasks'
export default function Archive({tasks, showAddTask, setShowAddTask, addTask, deletTask, toggleRiminder,editTask}){
    const compareDates=(date)=>{
        const day = new Date();
        const today =new Date(day.getFullYear(), day.getMonth(), day.getDate())
        const taskDates = new Date(date)
        return (today > taskDates)
    }
    console.log(compareDates('2025-01-10'))
    return(
    <div className='container-fliud archive'>
        <Link className='btn btn-empty' to="/"> 
        <FaArrowLeft/>
        </Link>
        <div className="container default-border">
            <h1>You're in archive folder</h1>
            <Tasks tasks={tasks} 
            onDelete={deletTask} 
            onToggle={toggleRiminder}
            onEditTask={editTask}
            />

        </div>
    </div>
    )
}
