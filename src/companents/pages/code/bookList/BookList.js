import React from "react";

import BookItem from "./BookItem";

const BookList = ({ onDelete, users, onToggleLike }) => {
  return (
    <>
      <div className="  h-[455px]   ">
        <div className="max-h-[420px]  max-w-[800px] overflow-y-auto m-auto border-4 p-5">
          {users.map((item) => (
            <div className="  " key={item.id}>
              <BookItem
                {...item}
                deleteItem={() => onDelete(item.id)}
                onToggleLike={() => onToggleLike(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
