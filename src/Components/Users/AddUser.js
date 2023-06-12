import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../Button/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;

    if (enterdAge.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input.(non-empty values)",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid input.(>0)",
      });
      return;
    }
    props.onAddUser(enterdName, enterdAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button onClick={errorHandler} />
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
