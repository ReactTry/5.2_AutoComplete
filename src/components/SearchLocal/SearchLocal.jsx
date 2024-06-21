import React, { useState } from "react";
import { Name } from "../api/names";
import AutoLocal from "./AutoLocal";

export const SearchLocal = () => {
  let initialCo = [];
  const [nameFilter, setNamefilter] = useState(initialCo);
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
    const filteredSuggestions = Name.filter((name) =>
      name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    if (e.target.value === "") {
      setNamefilter(initialCo);
    } else {
      setNamefilter(filteredSuggestions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputValue("");
    setNamefilter(initialCo);
  };

  return (
    <>
      <div>
        Search from Local db
        <div className="search-wrapper">
          <span className="deleteicon">
            <input
              type="text"
              name="focus"
              value={inputValue}
              className="search-box"
              placeholder="Search Names"
              onChange={handleChange}
            />
            <span onClick={handleSubmit}>x</span>
          </span>
        </div>
        <div>
          <AutoLocal nameFilter={nameFilter} />
        </div>
      </div>
    </>
  );
};
