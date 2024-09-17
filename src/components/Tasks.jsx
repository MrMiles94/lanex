import Task from './SingleTask'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            {tasks.map(
                (task)=>(
                    
                    <Task task={task}
                    key={task.id}
                    onDelete={onDelete} 
                    onToggle={onToggle}/>
                )
            )}
        </>
    )
}

export default Tasks