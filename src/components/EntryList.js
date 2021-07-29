import React, { useState } from "react";
import Card from "../Card";
import styles from "./EntryList.scss";

const EntryList = (props) => {
  
  //% Add usernames and ages to this in an obj literal
  return (
    <Card>
      <ul className="list">
        {props.profileArray.map((obj,ind) => (
          <li key={ind}>
            {obj.username} ({obj.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default EntryList;
