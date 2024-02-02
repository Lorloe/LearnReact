import React from 'react'

const Button = ({name = "button"}) => {
  return (
    <span className='btn'>
        {name}
    </span>
  )
}

export default Button
