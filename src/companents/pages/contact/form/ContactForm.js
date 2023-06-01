import React, { Component } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      data: []
    }
  }
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })


  }

  handleClick = (e) => {
    e.preventDefault()
    if (!this.state.name && !this.state.email && !this.state.message) {
      alert('write your name and email and som e message  me')



    } else if (!this.state.name && !this.state.email) {
      alert('write your name and email ')



    } else if (!this.state.name && !this.state.message) {
      alert('write your name and som e message  me')



    } else if (!this.state.email && !this.state.message) {
      alert('write your  email and som e message  me')



    }
    else if (!this.state.name) {
      alert('write your name')

    } else if (!this.state.email.includes('@gmail.com')) {
      alert('write your email')


    } else if (!this.state.message) {
      alert('write your message')

    } else {
      this.setState(
        {
          name: '',
          email: '',
          message: ''
        }
      )
      setTimeout(() => {
        alert('your message sent')

      }, 3000);
    }





  }
  render() {

    const { theme } = this.props.theme
    return (
      <div>

        <form className={`flex flex-col gap-2 p-2 border mb-4 max-w-[350px] sm:w-[450px]`}
        >
          <input type="text" placeholder='name' onChange={this.inputChange} value={this.state.name}
            className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `} name='name' />
          <input type="text" placeholder='email' onChange={this.inputChange} value={this.state.email}
            className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `} name='email' />
          <textarea name="message" id="" onChange={this.inputChange} value={this.state.message}
            cols="30" rows="8" className={`bg-[#ccd6f6] p-2  ${theme ? ' text-black' : 'text-black'} `}
            placeholder='message' ></textarea>
          <button type='submit' name='button' onClick={this.handleClick}
            className='border-2 bg-blue-700  w-[120px] flex items-center mx-auto p-2 gap-4 group'>send me  
            <FaLongArrowAltRight className='group-hover:rotate-90 duration-500 ' /></button>
        </form>
      </div>
    )
  }
}

export default ContactForm