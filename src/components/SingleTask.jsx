
import { FaEllipsisV} from "react-icons/fa";
import {useState} from 'react'

import Modal from './Modal'

const Task = ({task, onDelete, onToggle, fixTask}) =>{

  const [taskOption, SetTaskOptions] = useState(false)
  const [modal, setModal] = useState(true);
  const [edit, setEdit] = useState(false);
    const toggleEdit=()=>{
        setEdit(true)
        setModal( false)
    }
  const delet =()=> {
    onDelete(task.id)
    SetTaskOptions(false)
}
const editTask = (newTask) =>{
    fixTask(newTask)
    setModal( true)
    setEdit(false)
}
const toggleModal =()=>{
    setModal(!modal)
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
            <FaEllipsisV onClick={toggleModal}/>
            
        </div>
        <Modal modal={modal} edit={edit} 
        onToggleModal={toggleModal} 
        onDeleteTask={delet}
        onEditTask={toggleEdit}
        task={task}
        editTask={editTask}
        />
            
    </div>)
    )
}
export default Task