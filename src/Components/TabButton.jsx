import React from "react";

function TabButton({children,...props}) {
  function TabButtonHandler(){
    console.log('Hello World!');
  }
  // console.log(props);
  return (
    <li>
      <button className={props.isSelected?"active":null} {...props}>{children}</button>
    </li>
  );
}

export default TabButton;
