import Button from "./Button"

function Tittle({title, showAddTask, setShowAddTask}){
    const click = ()=>{
        setShowAddTask(!showAddTask)
    }
    return (
        <header className="header flex-row">
        <span>Name <b>||</b> name@email.com knsdlkmsdsm</span>
        <Button onClick={click} text={showAddTask ? 'Close': 'Add Task'} 
        color={showAddTask ? 'red': 'black'}
        />
        </header>
    )
}

export default Tittle
