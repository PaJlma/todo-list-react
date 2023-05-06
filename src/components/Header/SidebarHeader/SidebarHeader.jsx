import Button from "../../UI/Button/Button";
import styles from "./SidebarHeader.module.css";

const SidebarHeader = (props) => {
    return (
        <div className={styles.header}>
            <Button image={} text="Delete all tasks" />
        </div>
    );
}

export default SidebarHeader;