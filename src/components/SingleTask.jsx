
import { FaTimes, FaTrash, FaEdit, FaEllipsisV, FaExpeditedssl} from "react-icons/fa";
import {useState} from 'react'

const Task = ({task, onDelete, onToggle}) =>{

  const [taskOption, SetTaskOptions] = useState(false)

  const delet =()=> {
    onDelete(task.id)
    SetTaskOptions(false)
}

    const day = new Date()
    let taskDay = task.dateTime.split('-');
    taskDay = taskDay.map((item)=>Number(item))
    day.setFullYear(taskDay[0]) 
    day.setDate(taskDay[2])
    day.setMonth([taskDay[1]-1])
    const today = new Date()
    
    return(
    (!((task.text=="")||(task.text==null))&&<div className={(task.reminder) ? "reminder task":"task"}
        onDoubleClick={()=>onToggle(task.id)}
    >
        <div className="text">
            <h3>
                {task.text} 
            </h3>
            <p>
                {((taskDay[0]==today.getFullYear())&&(taskDay[1]-1==today.getMonth())&&(taskDay[2]==today.getDate()))&&<span>{'Today, '}</span>}
                {((taskDay[0]==today.getFullYear())&&(taskDay[1]-1==today.getMonth())&&(taskDay[2]-1==today.getDate()))&&<span>{"Tomorrow, "}</span>}
                {<span>{day.toDateString()}</span>}
            </p>
        </div>
        <div className="options">
            { !taskOption && <FaEllipsisV onClick={()=>SetTaskOptions(true)}/> }
            { taskOption && <div className="trying box">
            <FaTrash className="option" style={{color:'black'}} onClick={delet}/>
            <FaEdit className="option" style={{color:'green'}} onClick={()=>SetTaskOptions(false)}/>
            </div>}
        </div>
            
    </div>)
    )
}
export default Task