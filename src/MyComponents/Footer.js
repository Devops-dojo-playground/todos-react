import React from 'react'

let footerStyle = {

  bottom: "0%",
  position: "relative",
  marginTop: "70vh",
  width: "100%",
}

export const Footer = () => {
  return (
    <div className='bg-light text-dark' style={footerStyle}>
      <p className='text-center py-4'>

        Copyright &copy; myTodos.com
      </p>
    </div>
  )
}
