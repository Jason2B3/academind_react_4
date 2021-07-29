//Feature Imports
import React, { useState } from "react";
import ActivateSight from "./utility/ActivateSight";
// Component Imports
import EntryList from "./components/EntryList";
import DataForm from "./components/DataForm";
import ErrorModal from "./components/modal/ErrorModal";
import styles from "./App.module.scss";

const profiles = [
  { username: "Felix", age: 49 },
  { username: "Jeremiah", age: 31 },
  { username: "Diosa", age: 22 },
  { username: "Pedro", age: 56 },
];

function App(props) {
  //% Render modal if we retreive bad field data from DataForm.js
  const [modalOn, setModalOn] = useState(false);
  const renderModal = function () {
    setModalOn(true);
  };
  //% Exit modal if someone clicks the backdrop, OK button, or ESC
  const exitModal= function(){
    setModalOn(false); // set up by passing ƒ() to <ErrorModal>
  }
  //% Render new data in EntryList.js if we get good field data from DataForm.js
  const [profileArray, setProfileArray] = useState(profiles);
  const addToList = function (username, age) {
    const newData = { username: username, age: age };
    setProfileArray((prevEntries) => {
      console.log("Brought up to App.js", prevEntries);
      return [newData, ...prevEntries];
    });
  };
  //% JSX (Conditional)
  if (modalOn) return <ErrorModal exitModal={exitModal}/>;
  return (
    <div className={styles.holdAll}>
      <DataForm
      addToList={addToList}
        modalOn={modalOn}
        renderModal={renderModal}
        className={styles.child}
      ></DataForm>
      <EntryList className={styles.child} profileArray={profileArray}></EntryList>
      <ActivateSight></ActivateSight>
    </div>
  );
}

export default App;
