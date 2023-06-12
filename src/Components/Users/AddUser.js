import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="Error" message="something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            value={userName}
            onChange={changeNameHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            value={age}
            type="number"
            onChange={changeAgeHandler}
          ></input>
          <Button />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
