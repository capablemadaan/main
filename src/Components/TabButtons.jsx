import React from 'react'
import TabButton from './TabButton';
import { useState } from "react";
import { EXAMPLES } from '../data';
import Section from './Section';

function TabButtons() {
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
  return (<>
    <Section id="examples">
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
        </Section>
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
    </>
  )
}

export default TabButtons