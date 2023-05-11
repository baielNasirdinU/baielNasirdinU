import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ContactForm = ({ theme }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const onClickForm = (e) => {
    e.preventDefault()


    setName(
      {
        [e.target.name]: e.target.value
      }
    )


  }

  console.log(name);
  return (
    <>
      <form className={`flex flex-col gap-2 p-2 border `} onClick={onClickForm}
      >
        <input type="text" placeholder='name' className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `} name='name' />
        <input type="text" placeholder='email' className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `} name='email' />
        <textarea name="message" id="" cols="30" rows="8" className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `} placeholder='message' ></textarea>
        <button type='submit' name='button' className='border-2 bg-blue-700  w-[120px] flex items-center mx-auto p-2 gap-4 group'>send me  <FaLongArrowAltRight className='group-hover:rotate-90 duration-500 ' /></button>
      </form>
    </>
  )
}

export default ContactForm