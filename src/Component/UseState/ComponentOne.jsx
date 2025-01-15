import React from 'react'

const ComponentOne = ({onClickHandler}) => {
  return (
    <>
        <button onClick={() => onClickHandler()}>Add</button>
    </>
  )
}

export default ComponentOne