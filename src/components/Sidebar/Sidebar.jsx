import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader />
        </div>
    );
}