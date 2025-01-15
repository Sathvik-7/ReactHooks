import React from 'react'

const ComponentTwo = ({onClickHandler}) => {
  return (
    <>
        <button onClick={() => onClickHandler()}>Sub</button>
    </>
  )
}

export default ComponentTwo