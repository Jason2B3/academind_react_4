//Feature Imports
import React, { useState } from "react";
import ActivateSight from "./utility/ActivateSight";
// Component Imports
import ErrorModal from "./components/modal/ErrorModal";
import EntryList from "./components/EntryList";
import DataForm from "./components/DataForm";
import Card from "./Card";
import styles from "./App.module.scss";

function App(props) {
  return (
    /*
    <ErrorModal></ErrorModal> 
    */
    
    <div className={styles.holdAll}>
      <DataForm className={styles.child}></DataForm>
      <EntryList className={styles.child}></EntryList>
    </div>
    
  );
}

export default App;
