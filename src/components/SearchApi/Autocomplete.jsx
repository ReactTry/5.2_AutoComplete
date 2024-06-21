import "./Autocomplete.css";
function Autocomplete({ data }) {
  return (
    <>
      <div className="search-list">
        {data.map((item) => (
          <div key={item.id} className="">
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <img
                width="50"
                height="50"
                style={{ objectFit: "contain" }}
                src={item.thumbnail}
                alt=""
              />
              <div className="">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Autocomplete;
