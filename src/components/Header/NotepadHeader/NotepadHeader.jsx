import styles from "../Header.module.css";
import Button from "../../UI/Button/Button";

import plusSVG from "../../../images/plus.svg";
import Input from "../../UI/Input/Input";

const NotepadHeader = (props) => {
    const addNewTaskClickHandler = () => props.dispatch({type: "ADD_NEW_TASK"})
    const inputChangeHandler = (event) => {
        const text = event.target.value
        props.dispatch({type: "INPUT_MUTATION_OBSERVER", text: text})  
    }

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Button onClick={addNewTaskClickHandler} image={plusSVG} text="Add New Task" />
                <Input onChange={inputChangeHandler} value={props.state.todos.inputText} placeholder="Type Task Title Here" />
            </div>
            <p className={styles.title}>{props.state.todos?.selectedTask?.title ?? ""}</p>
        </div>
    );
}

export default NotepadHeader;