import React from "react";

function TabButton(props) {
  function TabButtonHandler(){
    console.log('Hello World!');
  }
  // console.log(props);
  return (
    <li>
      <button className={props.isSelected?"active":null} onClick={props.onClick}>{props.children}</button>
    </li>
  );
}

export default TabButton;
