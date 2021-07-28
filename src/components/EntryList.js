import React, { useState } from "react";
import Card from "../Card";
import styles from "./EntryList.scss";

const EntryList = (props) => {
  const profiles = [
    { username: "Felix", age: 49 },
    { username: "Jeremiah", age: 31 },
    { username: "Diosa", age: 22 },
  ];
  //% Add usernames and ages to this in an obj literal
  return (
    <Card>
      <ul>
        {profiles.map((obj) => (
          <li>
            {obj.username} ({obj.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default EntryList;
