
import { useState } from "react"

const AddTask = ({onAddTask}) =>{
    const [text, setText]       =   useState('')
    const [dateTime , setDay]        =   useState('')
    const [reminder,setReminder] =   useState(false)

    const onAdd =(e)=>{
        e.preventDefault()
        const rand = Math.floor(Math.random()*1000000*1645)
        onAddTask(
            
            {
                id:rand,
                text:text,
                dateTime:dateTime,
                reminder:reminder
                
            }
        )

        setText('');
        setDay('');
        setReminder(false)
    }
    return(
        <form className="add-form" onSubmit={onAdd}>
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
    )
}
export default AddTask