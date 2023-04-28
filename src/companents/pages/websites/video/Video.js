// import React, { useState } from "react";
// import styles from "../../../util/style";
// import { FaSearch } from "react-icons/fa";

// import item from "../../../constants/index";
// const Video = () => {
//   const [cotigory, setCotigory] = useState(false);
//   const handleClick = () => {
//     setCotigory((preveState) => !preveState);
//   };
//   console.log(cotigory);

//   return (
//     <>
//       <div className={` ${styles.container}`}>
//         <div className="">
//           <div
//             className={`flex ${styles.flexBetween} h-[90px]  my-6 bg-slate-400 px-6 rounded-lg  `}
//           >
//             <div className="logo">
//               {/* <a href="">logo</a> */}sdf
//             </div>

//             <div
//               className={`flex  ${styles.flexCenter} relative   `}
//             >
//               <input
//                 type="text "
//                 placeholder="search.."
//                 className="rounded-md p-2 p sm:w-[300px] w-[200px]  outline-1"
//               />
//               <FaSearch className="absolute right-5 text-lg text-gray-400 " />
//             </div>
//           </div>
//         </div>
//         <ul
//           className={`flex border    overflow-x-auto bg-gray-600 `}
//         >
//           {item.map((value) => (
//             <li
//               key={value.name}
//               onClick={handleClick}
//               className={`w-[70px]  bg-white text-black hover:bg-slate-900 hover:text-white text-center p-4  `}
//             >
//               <p>{value.icon}</p>
//               <p>{value.name}</p>
//             </li>
//           ))}
//         </ul>
//         <div className="">
//           <p>
//             <span></span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Video;
