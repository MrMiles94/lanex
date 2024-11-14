import { FaTimes, FaTrash, FaEdit} from "react-icons/fa";

import EditText from "./Edit";
export default function Modal ({
        modal, edit, onToggleModal,
         onEditTask,onDeleteTask, task, editTask
        }){
   
    return(
        <>
        { !modal && <div className="overlay flex-col align-center">
            <div className="cancel" onClick={onToggleModal}></div>
            <div className={ (edit) ? "modal flex-col align-center edit" : "modal flex-col align-center option"}>
                <button onClick={onToggleModal}></button>
                { !edit && <div className="modal-box">
                    <button onClick={onEditTask} className=" btn btn-block-left"> <FaEdit/>  Edit</button>
                    <button onClick={onDeleteTask} className="btn btn-block-left delete"> <FaTrash/> Delete</button>
                </div>}
                {edit && <>
                    <EditText task={task} editTask={editTask}/>
                    </>}

            </div>
        </div> }
        </>
    )
}