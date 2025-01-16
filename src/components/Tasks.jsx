import Task from './SingleTask';

const Tasks = ({tasks, onDelete, onToggle, onEditTask}) => {
    
    return (
        <>
            {(tasks)? tasks.map(
                (task)=>(
                    <Task 
                        task={task}
                        key={task.id}
                        onDelete={onDelete} 
                        onToggle={onToggle}
                        fixTask={onEditTask}
                    />
                )
            ): <div>Nothing to display!</div>}
        </>
    )
};
export default Tasks;
