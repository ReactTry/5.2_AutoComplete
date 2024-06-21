import { Fragment } from "react";
import AutoApi from "./components/SearchApi/AutoApi";
import AutoLocal from "./components/SearchLocal/AutoLocal";
import "./styles/globals.css";
import { SearchLocal } from "./components/SearchLocal/SearchLocal";

function App() {
  return (
    <>
      <div className="rootDiv">
        <Fragment>
          {/* Search from local data */}
          <SearchLocal />
          {/* Search from  product API */}
          <AutoApi />
        </Fragment>
      </div>
    </>
  );
}

export default App;
