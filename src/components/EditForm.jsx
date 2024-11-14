import { useState } from "react"

export default function EditForm({task, onEditTask}){

    const [text, setText] = useState(task.text)
    const [dateTime, setDay] = useState(task.dateTime)
    const [reminder, setReminder]= useState(task.reminder)
    
    //fucntions 
    const onEdit =(e)=>{
        e.preventDefault()
       onEditTask(
        {
            id:task.id,
            text:text,
            dateTime:dateTime,
            reminder:reminder
        }
       )
    }
    return(
    <>
        <form className="add-form" onSubmit={onEdit}>
            <div className="form-control">
                <label htmlFor="AddTask">Task </label>
                <input type="text" 
                placeholder="Add Task" 
                id="AddTask"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="day-time">Day & Time </label>
                <input type="date" 
                placeholder="Add Day & Time" 
                id="day-time"
                value={dateTime}
                onChange={(e)=>setDay(e.target.value)}
                />
                
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder </label>
                <input type="checkbox" id="reminder"
                checked={reminder}
                value={reminder} 
                onChange={(e)=>setReminder(e.currentTarget.checked)} 
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" 
                
            />
        </form>
    </>
    )
}