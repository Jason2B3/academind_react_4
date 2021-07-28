import React, { useState } from "react";
import Card from "../Card";
import styles from './DataForm.module.scss'

const DataForm = (props) => {
  const formSubmitHandler = function () {};
  return (
    <Card style={{ backgroundColor: "red;" }}>
      <form onSubmit={formSubmitHandler}>
        <label classame="">Username</label>
        <input
          type="text"
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          type="number"
          step="1"
          // value={enteredValue}
          // onChange={goalInputChangeHandler}
        />
        <button type="submit"></button>
      </form>
    </Card>
  );
};
export default DataForm;
