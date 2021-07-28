//Feature Imports
import React, { useState } from 'react';
import ActivateSight from "./utility/ActivateSight";
// Component Imports
import ErrorModal from './components/modal/ErrorModal';
import EntryList from './components/EntryList';
import DataForm from './components/top-form/DataForm'

function App(props) {
  return (
    <DataForm></DataForm>
  )
  /*
  return (
    <div>
      <DataForm></DataForm>
      <EntryList></EntryList>
      <ActivateSight/>
    </div>
  );
  */
}

export default App;


