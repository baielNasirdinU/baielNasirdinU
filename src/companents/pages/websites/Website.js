import React from "react";

const Website = () => {
  return <div>Website</div>;
};

export default Website;

// import React from "react";
// import styles from "../../util/style";
// const Website = () => {
//   // const [state, setState] = useState(false);/
//   // console.log(state);
//   const dataItem = [
//     {
//       name: "you tube",
//       id: 1,
//       href: "videos",
//     },
//     {
//       name: "book",
//       id: 2,
//       href: "book",
//     },
//   ];

//   return (
//     <>
//       <div className={`${styles.container} `}>
//         <h2 className="text-center text-[32px] m-8 relative">
//           websites
//           <div
//             className={`w-[50px] h-[4px] bg-black absolute left-[50%]  `}
//           ></div>
//           <div
//             className={`w-[10px] h-[10px] bg-black absolute left-[50%]  translate-x-[-50%] rounded-lg`}
//           ></div>
//           <div
//             className={`w-[50px] h-[4px] bg-black absolute right-[50%] `}
//           ></div>
//         </h2>
//         <ul
//           className={`${styles.flexCenter} p-6 bg-lime-700 rounded gap-[30px] `}
//         >
//           {dataItem.map((value) => (
//             <li key={value.id} className="">
//               <img
//                 src="/"
//                 alt=""
//                 className="w-[500px] h-[500px] "
//               />
//               <a href={value.href} className="relative">
//                 <p className="absolute top-[50%]  w-[100%] text-center p-6 hidden text-white  backdrop-opacity-10 backdrop-invert bg-white/30">
//                   {value.name}
//                 </p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Website;
