import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"></input>
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
