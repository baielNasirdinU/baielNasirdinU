import React, { Component } from "react";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: 0,
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    // e.preventDefault();
  };
  render() {
    console.log(this.state);
    return (
      <div className=" text-[22px] capitalize">
        <div
          className={`  rounded-lg ${
            this.props.theme ? "border" : "bg-gray-300"
          } p-3 w-[350px]  `}
        >
          <form action="" className={`flex-col flex    `}>
            <label htmlFor="name">firstName</label>
            <input
              onClick={this.handleInput}
              className={`pl-[15px] rounded-[15px] text-black`}
              type="text"
              name="name"
              id="name"
              placeholder="firstName"
            />
            <label htmlFor="surname">surname</label>
            <input
              onClick={this.handleInput}
              className={`pl-[15px] rounded-[15px] text-black`}
              type="text"
              name="surname"
              id="surname"
              placeholder="surname"
            />
            <label htmlFor="age">age</label>
            <input
              onClick={this.handleInput}
              className={`pl-[15px] pr-[15px] rounded-[15px] text-black`}
              type="number"
              id="age"
              name="age"
              placeholder="age.."
            />
            <label htmlFor="email">email</label>
            <input
              onClick={this.handleInput}
              className={`pl-[15px] rounded-[15px] text-black`}
              type="email"
              name="email"
              placeholder="email..."
              id="email"
            />
            <label htmlFor="password">password</label>
            <input
              onClick={this.handleInput}
              className={`pl-[15px] rounded-[15px] text-black`}
              type="password"
              name="password"
              placeholder="password..."
              id="password"
            ></input>
            <button
              onClick={this.handleClick}
              className={`p-2  m-3 bg-green-700 rounded-lg`}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
