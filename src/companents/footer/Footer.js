import React from 'react'

const Footer = ({theme}) => {
  return (
    <div className={`h-[50px] text-center ${theme?'dark':'light'} `}>Footer</div>
  )
}

export default Footer