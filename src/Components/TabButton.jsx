import React from "react";

function TabButton({children,isSelected,...props}) {
  function TabButtonHandler(){
    console.log('Hello World!');
  }
  // console.log(props);
  return (
    <li>
      <button className={isSelected?"active":null} {...props}>{children}</button>
    </li>
  );
}

export default TabButton;
