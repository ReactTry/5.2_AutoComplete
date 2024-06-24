import React, { useEffect, useState } from "react";
import "./Autocomplete.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import SearchBar from "./SearchBar";

const AutoCompDbounce = () => {
  const [inputValue, setinputValue] = useState("");
  const [nameFilter, setnameFilter] = useState([]);
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (inputValue) {
        FilteredProductList();
      }
      else{
        nameFilter([])
      }
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue]);

  const FilteredProductList = async () => {
    const response = await axios.request({
      method: "GET",
      url: "https://dummyjson.com/products/search",
      params: {
        q: inputValue,
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
           apitype="Debounce"
        />

        <Autocomplete data={nameFilter} />
      </div>
    </>
  );
};

export default AutoCompDbounce;
