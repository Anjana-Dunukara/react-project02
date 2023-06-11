const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="username">User Name</label>
      <input type="text"></input>
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
