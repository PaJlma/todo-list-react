import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            <img src={props.image} alt="button-image" />
            <p>{props.text}</p>
        </button>
    );
}

export default Button;