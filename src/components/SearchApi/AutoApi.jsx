import React, { useState } from "react";
import "./Autocomplete.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import SearchBar from "./SearchBar";

const AutoApi = () => {
  const [inputValue, setinputValue] = useState("");
  const [nameFilter, setnameFilter] = useState([]);
  const handleChange = (e) => {
    setinputValue(e.target.value);
    if (e.target.value !== "") {
      FilteredProductList(e.target.value);
    } else {
      setnameFilter([]);
    }
  };

  const FilteredProductList = async (query) => {
    const response = await axios.request({
      method: "GET",
      url: "https://dummyjson.com/products/search",
      params: {
        q: query,
        limit: 10,
        select: "title,thumbnail",
      },
    });

    setnameFilter(response.data.products);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputValue("");
    setnameFilter([]);
  };

  return (
    <>
      <div>
        <SearchBar
          inputValue={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <Autocomplete data={nameFilter} />
      </div>
    </>
  );
};

export default AutoApi;
