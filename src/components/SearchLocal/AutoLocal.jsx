import React from "react";

const AutoLocal = ({ nameFilter }) => {
  return (
    <>
      {nameFilter.map((item) => {
        return (
          <div key={item} className="">
            {item}
          </div>
        );
      })}
    </>
  );
};

export default AutoLocal;
