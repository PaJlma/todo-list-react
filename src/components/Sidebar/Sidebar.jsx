import styles from "./Sidebar.module.css";
import SidebarHeader from "../Header/SidebarHeader/SidebarHeader";
import Task from "./Task/Task";

const Sidebar = (props) => {
    const selectTaskClickHandler = (event) => {
        const taskID = event.currentTarget.id;
        props.dispatch({type: "SELECT_TASK", id: taskID});
    }

    const deleteTaskHandler = (event) => {
        const taskID = event.currentTarget.closest(`.Task_task__BZzc2`).id;
        props.dispatch({type: "DELETE_TASK", id: taskID});
    }

    const tasks = props.state.todos.tasks
                .map(task => <Task 
                        onClick={selectTaskClickHandler} 
                        deleteFoo={deleteTaskHandler}
                        id={task.id} 
                        title={ task.title } 
                        time={ task.time } 
                        text={ task.text.slice(0, 100)+"..." }
                    />)

    return (
        <div className={styles.sidebar}>
            <SidebarHeader dispatch={props.dispatch} />
            <div className={styles.tasks}>
                { tasks }
            </div>
        </div>
    );
}

export default Sidebar; 