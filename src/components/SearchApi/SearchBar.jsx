const SearchBar = ({inputValue,handleChange,handleSubmit,apitype}) => {
  return (
    <div>
      Auto complete through {apitype}
   

      <div className="search-wrapper">
      <span className="deleteicon" >
      <input
          type="text"
          name="focus"
          value={inputValue}
          className="search-box"
          placeholder="Search Products-Ball, Bag, Dress phone, shoes, apple, bike, laptop etc...."
          onChange={handleChange}
        />
            <span onClick={handleSubmit}>x</span>
        </span>
        </div>
    </div>
  );
};

export default SearchBar;
