import React, { useState, useRef } from "react";
import Card from "../Card";
import styles from "./DataForm.module.scss";

const DataForm = (props) => {
  //% Refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //% Handler (only need one for submit with refs instead of states)
  const submitHandler = function (e) {
    //$ We place ref current values in the handler scope on purpose
    //$ By now, the JSX has rendered, so the refs have values that aren't undefined
    //$ undefined.current.value generates an error otherwise
    let nameInputValue = nameInputRef.current.value;
    let ageInputValue = ageInputRef.current.value;

    e.preventDefault();
    // If you get bad data, render the modal in App.js
    if (nameInputValue.trim().length === 0 || ageInputValue <= 0) {
      props.renderModal();
      return; // prevent sending data to list
    }
    // If data's good, render new data in EntryList.js
    // We pass data to App.js, unshift the array there, then send the data to EntryList.js
    props.addToList(nameInputValue, ageInputValue);
    //$ Clear the input fields
    //$ At this point, the useRef is now equal to an object
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <form className={styles.formContainer}>
        <label className={styles.label1}>Username</label>
        <input type="text" ref={nameInputRef} />
        <label className={styles.label2}>Age (Years)</label>
        <input type="number" step="1" ref={ageInputRef} />
        <button onClick={submitHandler} className={styles.btn} type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};
export default DataForm;
