import styles from "./Notepad.module.css"
import NotepadHeader from './../Header/NotepadHeader/NotepadHeader';

const Notepad = (props) => {
   return (
        <div className={styles.notepad}>
            <NotepadHeader state={props.state} dispatch={props.dispatch} />
            <textarea className={styles.notepad} />
        </div>
    );
}

export default Notepad;