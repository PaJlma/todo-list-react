import styles from "./Sidebar.module.css";
import SidebarHeader from "../Header/SidebarHeader/SidebarHeader";
import Task from "./Task/Task";

const Sidebar = (props) => {
    const tasks = props.state.todos.tasks
                .map(task => <Task title={ task.title } time={ task.time } text={ task.text } />)

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