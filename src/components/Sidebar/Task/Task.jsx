import styles from "./Task.module.css"

const Task = (props) => {
   return (
        <div onClick={props.onClick} id={props.id} className={ styles.task }>
            <div className={ styles.info }>
                <h4 className={ styles.title }>{ props.title }</h4>
                <p className={ styles.time }>{ props.time }</p>
            </div>
            <p className={ styles.text }>{ props.text }</p>
        </div>
    );
}

export default Task;