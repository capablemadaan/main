import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [activeButton, setActiveButton] = useState("");
  const [displayText, setDisplaytext] = useState("");
  function ComponentsButtonHandler() {
    setActiveButton("Components");
    setDisplaytext("Components");
    
  }
  function JSXButtonHandler() {
    setActiveButton("JSX");
    setDisplaytext("JSX");
  }
  function PropsButtonHandler() {
    setActiveButton("Props");
    setDisplaytext("Props");
  }
  function StateButtonHandler() {
    setActiveButton("State");
    setDisplaytext("State");
  }
  // console.log(`Hello from ${activeButton}`);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={ComponentsButtonHandler}>Components</TabButton>
            <TabButton onClick={JSXButtonHandler}>JSX</TabButton>
            <TabButton onClick={PropsButtonHandler}>Props</TabButton>
            <TabButton onClick={StateButtonHandler}>State</TabButton>
          </menu>
        </section>
        <section id="tab-content">
          <h3>{activeButton}</h3>
          <code>{displayText}</code>
        </section>
      </main>
    </div>
  );
}

export default App;
