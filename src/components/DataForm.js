import React, { useState } from "react";
import Card from "../Card";
import styles from "./DataForm.module.scss";

const DataForm = (props) => {
  //% State hooks
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  //% Handlers
  const input1Handler = function (e) {
    setUsername(e.target.value);
  };
  const input2Handler = function (e) {
    setAge(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    // If you get bad data, render the modal in App.js
    if (username.trim().length === 0 || age <= 0) {
      props.renderModal();
      return; // prevent sending data to list
    }
    // If data's good, render new data in EntryList.js
    // We pass data to App.js, unshift the array there, then send the data to EntryList.js
    props.addToList(username, age);
    // Clear the input fields while you're at it
    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <form className={styles.formContainer}>
        <label className={styles.label1}>Username</label>
        <input type="text" value={username} onChange={input1Handler} />
        <label className={styles.label2}>Age (Years)</label>
        <input type="number" step="1" value={age} onChange={input2Handler} />
        <button onClick={submitHandler} className={styles.btn} type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};
export default DataForm;
