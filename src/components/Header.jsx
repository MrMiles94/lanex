import Button from "./Button"

function Header({title, showAddTask, setShowAddTask}){
    const click = ()=>{
        setShowAddTask(!showAddTask)
    }
    return (
        <header className="header flex-row">
        <h1>{title}</h1>
        <Button onClick={click} text={showAddTask ? 'Close': 'Add Task'} 
        color={showAddTask ? 'red': 'black'}
        />
        </header>
    )
}

export default Header
