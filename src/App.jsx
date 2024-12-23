import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header.jsx";
import { useState } from "react";
import React from "react";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButtons from "./Components/TabButtons.jsx";
function App() {
  
  return (
    <React.Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <TabButtons/>
      </main>
    </React.Fragment>
  );
}

export default App;
