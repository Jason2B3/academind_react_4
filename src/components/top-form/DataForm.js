import React, { useState } from "react";
import Card from "../Card";
import Username from "./Username";
import Age from "./Age";
import AddUserButton from "./AddUserButton";

const DataForm = (props) => {
  const formSubmitHandler = function () {};
  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <Username></Username>
        <Age></Age>
        <AddUserButton type="submit">Add Goal</AddUserButton>
      </form>
    </Card>
  );
};
export default DataForm;
