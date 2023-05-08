import React from 'react'
import Wheather from './wheather/Wheather'
import styles from '../../util/style'

const Blog = ({ theme }) => {
  return (
    <>
      <div className={`${theme ? 'dark' : 'light'}  pb-6 h-[640px]`}>
        <h2 className={`${styles.textC} text-center text-[32px] relative font-bold p-9 mb-9`}>blog
          <div
            className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
              } absolute left-[50%]  `}
          ></div>
          <div
            className={`w-[10px] h-[10px] ${theme ? "   bg-white b" : " bg-black"
              } absolute left-[50%]  translate-x-[-50%] rounded-lg`}
          ></div>
          <div
            className={`w-[50px] h-[4px] ${theme ? "   bg-white b" : " bg-black"
              } absolute right-[50%] `}
          ></div></h2>
        <div className={`${styles.container}`}>
          <Wheather theme={theme} />


        </div>
      </div>

    </>
  )
}

export default Blog