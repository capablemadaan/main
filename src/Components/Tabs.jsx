import React from 'react'

function Tabs({children,Buttons,ButtonComponent='menu'}) {
  return (
    <>
        <ButtonComponent>{Buttons}</ButtonComponent>
        {children}
    </>
  )
}

export default Tabs