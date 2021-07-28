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
    <div className={styles.holdAll}>
      <DataForm></DataForm>
      <EntryList></EntryList>
      <ActivateSight />
    </div>
  );
}

export default App;
