import React from 'react'

const Card = (props) => {
  return (
    <div className= {`bg-neutral-50 p-5 rounded-xl ${props.addClass}`}>
      {props.children}
    </div>
  )
}

export default Card
