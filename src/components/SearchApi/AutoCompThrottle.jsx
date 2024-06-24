import React, { useEffect, useState, useRef } from "react";
import "./Autocomplete.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import SearchBar from "./SearchBar";

const AutoCompThrottle = () => {
  const t = useRef();
  const [inputValue, setinputValue] = useState("");
  const [nameFilter, setnameFilter] = useState([]);
  
  
  const delay = 2000;

  
  const handleChange = (event) => {
    setinputValue(event.target.value);
    if (!t.current) {
      t.current = setTimeout(() => {
        FilteredProductList();
        clearTimeout(t.current);
        t.current = null;
      }, delay);
    }
   
  };

  //   useEffect(() => {
  //     if (debounceTimer) {
  //         debounceTimer=false;
  //      // clearTimeout(debounceTimer);
  //      debounceTimer = setTimeout(() => {
  //         if (inputValue) {
  //           FilteredProductList();
  //         } else {
  //           setnameFilter([]);
  //         }
  //       }, 1000);

  //     }

  //     return () => {
  //        // clearTimeout(debounceTimer);
  //     }
  //   }, [])

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
           apitype="Throttle"
        />

        <Autocomplete data={nameFilter} />
      </div>
    </>
  );
};

export default AutoCompThrottle;
