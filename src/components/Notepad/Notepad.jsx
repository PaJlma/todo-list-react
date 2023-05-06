import styles from "./Notepad.module.css"
import NotepadHeader from './../Header/NotepadHeader/NotepadHeader';

const Notepad = (props) => {
    const textareaChangeHandler = (event) => {
            const text = event.target.value;
            props.dispatch({type: "TEXTAREA_MUTATION_OBSERVER", text: text});
    }

   return (
        <div className={styles.notepad}>
            <NotepadHeader state={props.state} dispatch={props.dispatch} />
            <div className={styles.wrapper}>
                <textarea 
                readOnly={props.state.todos.selectedTask === null ? true : false} 
                onChange={textareaChangeHandler} value={props.state.todos.selectedTask?.text ?? ""} 
                className={styles.notepad}
                 />
            </div>
        </div>
    );
}

export default Notepad;