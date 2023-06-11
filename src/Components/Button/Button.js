import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <button type="submit" className={styles.button}>
        Add User
      </button>
    </div>
  );
};

export default Button;
