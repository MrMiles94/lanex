
import EditForm from "./EditForm"
const EditText = ({task, editTask})=>{
    
return(
    <div className="edit">
        <EditForm task={task} onEditTask={editTask}/>
    </div>
)
}
export default EditText 