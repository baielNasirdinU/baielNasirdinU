import React, { useState } from "react";
import styles from "../../../util/style";
import {
  MdDeleteForever,
  MdStarRate,
} from "react-icons/md";
import { RiDislikeFill } from "react-icons/ri";

const BookItem = ({
  name,
  deleteItem,
  email,
  onToggleLike,
  favourite,
}) => {
  const [like, setUnLike] = useState(false);

  const unlike = () => {
    setUnLike((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`p-4 border-b-4 mt-2 rounded-[10px ${styles.flexBetween}  `}
      >
        <div className="flex">
          <div
            className={`h-[40px] w-[40px] bg-gray-600 rounded-[50%] mr-[10px]`}
          ></div>
          <div className="">
            {" "}
            <h3
              className={`${styles.textC} text-[20px] ${
                favourite && "active"
              }`}
            >
              {name}
            </h3>
            <h3>{email}</h3>
          </div>
        </div>
        <div className="flex">
          <MdStarRate
            className={`text-[28px]  mr-3 ${
              favourite && "active"
            }`}
            onClick={onToggleLike}
          />
          <MdDeleteForever
            className="text-[28px] hover:text-red-500 transition-all duration-500  mr-3"
            onClick={deleteItem}
          />
          <RiDislikeFill
            className={`text-[28px] ${
              favourite ? "" : ""
            } ${like && "like"}`}
            onClick={unlike}
          />
        </div>
      </div>
    </>
  );
};

export default BookItem;
