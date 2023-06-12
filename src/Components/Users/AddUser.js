import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input.(non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input.(>0)",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
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
          <Button onClick={errorHandler} />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
