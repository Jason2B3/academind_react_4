import React, { useState } from "react";
import Card from "../Card";
import styles from "./EntryList.scss";

const EntryList = (props) => {
  const profiles = [
    { username: "Felix", age: 49 },
    { username: "Jeremiah", age: 31 },
    { username: "Diosa", age: 22 },
    { username: "Pedro", age: 56 },
  ];
  //% Add usernames and ages to this in an obj literal
  return (
    <Card>
      <ul className="list">
        {profiles.map((obj,ind) => (
          <li key={ind}>
            {obj.username} ({obj.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default EntryList;
