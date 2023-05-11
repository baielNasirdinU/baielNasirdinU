import React, { Component } from "react";
import styles from "../../../util/style";
import { v4 as uuidv4 } from "uuid";
class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  inputHandle = (e) => {
    if (e.target.value.trim()) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  clickHandler = (e) => {
    e.preventDefault();

    if (!this.state.name && !this.state.email) {
      alert("write your name and email !!");
    } else if (!this.state.name) {
      alert("write your name please ....");
    } else if (!this.state.email.includes("@gmail.com")) {
      alert("write your email please ...");
    } else {
      this.setState({
        name: "",
        email: "",
      });
      this.props.adForm({
        name: this.state.name,
        email: this.state.email,
        id: uuidv4(),
      });
    }
  };

  // } else if (this.state.email && this.state.name) {
  // }

  render() {
    const { name, email } = this.state;

    return (
      <>
        <div
          className={`  border mb-[30px]  p-5  rounded-lg ${this.props.theme ? "" : "bg-gray-300"
            }`}
        >
          <h2
            className={`${styles.textC} text-[24px]  mb-[20px]`}
          >
            add user
          </h2>
          <form className={`flex flex-wrap `}>
            <input
              type="text"
              className="p-2 border-2 mr-3 w-[300px] text-black mb-2"
              placeholder="name user ..."
              onChange={this.inputHandle}
              name="name"
              value={name}
            />
            <input
              type="text"
              className="p-2 border-2  mr-3  w-[300px] text-black mb-2"
              placeholder="email ..."
              onChange={this.inputHandle}
              name="email"
              value={email}
            />
            <button
              onClick={this.clickHandler}
              className={`w-[85px] border bg-gray-500 text-white rounded`}
            >
              add
            </button>
          </form>
          <div>
            <h2 className={`${styles.textC} text-[18px]`}>
              users ...{this.props.userCount}...
            </h2>
            <h2 className={`${styles.textC} text-[18px]`}>
              stars...{this.props.stars}...
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default FormSearch;
