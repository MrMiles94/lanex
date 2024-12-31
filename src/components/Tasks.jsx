import Task from './SingleTask';

const Tasks = ({tasks, onDelete, onToggle, onEditTask}) => {
    
    return (
        <>
            {tasks.map(
                (task)=>(
                    <Task 
                        task={task}
                        key={task.id}
                        onDelete={onDelete} 
                        onToggle={onToggle}
                        fixTask={onEditTask}
                    />
                )
            )}
        </>
    )
};
export default Tasks;
