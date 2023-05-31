import React, {  useRef, useState } from "react";
import styles from "../../../util/style";
import { v4 as uuidv4 } from "uuid";
import { FaLongArrowAltRight } from 'react-icons/fa'

 
const FormSearch=({adForm,theme,userCount,stars})=>{
  const [state,setState]=useState({name:'',email:''})
  const cvRef=useRef(null)
  // console.log(cvRef.current.focus());


  const inputHandle = (e) => {
    setState({...state,  [e.target.name]: e.target.value,})
    if(state.name.length===5){
      cvRef.current.focus()
    }
}
const clickHandler=(e)=>{
  e.preventDefault();


  if (!state.name && !state.email) {
    alert("write your name and email !!");
  } else if (!state.name) {
    alert("write your name please ....");
  } else if (!state.email.includes("@gmail.com")) {
    alert("write your email please ...");
  } else {
    setState({
      name: "",
      email: "",
    });
    adForm({
      name: state.name,
      email: state.email,
      id: uuidv4(),
    });
  }


}


  return (
    <>
      <div
        className={`  border mb-[30px]  p-5  rounded-lg ${theme ? "" : "bg-gray-300"
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
            onChange={inputHandle}
            name="name"
            value={state.name}
          />
          <input 
          ref={cvRef}
            type="text"
            className="p-2 border-2  mr-3  w-[300px] text-black mb-2"
            placeholder="email ..."
            onChange={inputHandle}
            name="email"
            value={state.email}
          />
  
      
          <button type='submit' name='button' onClick={clickHandler}
          className='border-2 bg-blue-700  w-[120px] flex items-center mx-auto p-2 gap-4 group'>send me  
          <FaLongArrowAltRight className='group-hover:rotate-90 duration-500 ' /></button>
  
        </form>
        <div>
          <h2 className={`${styles.textC} text-[18px]`}>
            users ...{userCount}...
          </h2>
          <h2 className={`${styles.textC} text-[18px]`}>
            stars...{stars}...
          </h2>
        </div>
      </div>
    </>
  );
}


export default FormSearch;
