import styles from "./Input.module.css"

const Input = (props) => {
   return (
        <input 
            value={props.value} 
            onChange={ props.onChange } 
            placeholder={ props.placeholder } 
            className={ styles.input } 
            type="text" 
        />
    );
}

export default Input;