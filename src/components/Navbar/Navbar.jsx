import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.parentNavbar}>
      <h1>Simple To Do List</h1>
      <div className={styles.childNavbar}>
        <ul>
          <li>Home</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </div>
);
}
