import React, { useState } from "react";
import Card from "../Card";
import styles from "./DataForm.module.scss";

const DataForm = (props) => {
  return (
    <Card>
      <form className={styles.formContainer}>
        <label className={styles.label1}>Username</label>
        <input
          type="text"
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
        />
        <label className={styles.label2}>Age (Years)</label>
        <input
          type="number"
          step="1"
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
        />
        <button className={styles.btn} type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};
export default DataForm;
