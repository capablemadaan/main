import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";
import { useState } from "react";
function App() {
  const [activeButton, setActiveButton] = useState();
  // const [displayText, setDisplaytext] = useState("");
  // function ComponentsButtonHandler() {
  //   setActiveButton("Components");
  //   setDisplaytext("Components");

  // }
  // function JSXButtonHandler() {
  //   setActiveButton("JSX");
  //   setDisplaytext("JSX");
  // }
  // function PropsButtonHandler() {
  //   setActiveButton("Props");
  //   setDisplaytext("Props");
  // }
  // function StateButtonHandler() {
  //   setActiveButton("State");
  //   setDisplaytext("State");
  // }
  // console.log(`Hello from ${activeButton}`);
  function ButtonHandler(buttonText) {
    setActiveButton(buttonText);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcept key={element.title} {...element}/>)
            )}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton onClick={ComponentsButtonHandler}>Components</TabButton>
            <TabButton onClick={JSXButtonHandler}>JSX</TabButton>
            <TabButton onClick={PropsButtonHandler}>Props</TabButton>
            <TabButton onClick={StateButtonHandler}>State</TabButton> */}
            <TabButton
              onClick={() => {
                ButtonHandler("components");
              }}
              isSelected={activeButton==='components'}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                ButtonHandler("jsx");
              }}
              isSelected={activeButton==='jsx'}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                ButtonHandler("props");
              }}
              isSelected={activeButton==='props'}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                ButtonHandler("state");
              }}
              isSelected={activeButton==='state'}
            >
              State
            </TabButton>
          </menu>
        </section>
        {!activeButton && <p>Please choose a topic</p>}
        {activeButton && (
          <div id="tab-content">
            <h3>{EXAMPLES[activeButton].title}</h3>
            <p>{EXAMPLES[activeButton].description}</p>
            <pre>
              <code>{EXAMPLES[activeButton].code}</code>
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
