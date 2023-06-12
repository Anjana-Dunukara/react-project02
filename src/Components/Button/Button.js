import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button type="submit" className={styles.button} onClick={props.onClick}>
        Add User
      </button>
    </div>
  );
};

export default Button;
