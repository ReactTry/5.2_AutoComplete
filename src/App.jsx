import { Fragment } from "react";
import AutoApi from "./components/SearchApi/AutoApi";
import AutoLocal from "./components/SearchLocal/AutoLocal";
import "./styles/globals.css";
import { SearchLocal } from "./components/SearchLocal/SearchLocal";
import AutoCompDbounce from "./components/SearchApi/AutoCompDbounce";
import AutoCompThrottle from "./components/SearchApi/AutoCompThrottle";

function App() {
  return (
    <>
      <div className="rootDiv">
        <Fragment>
          {/* Search from local data */}
          <SearchLocal />
          {/* Search from  product API */}
          {/* <AutoApi /> */}

           {/* Search from  product API throuh Debounce*/}
          <AutoCompDbounce/>
          {/* Search from  product API throuh Throttle*/}
          {/* <AutoCompThrottle/> */}
        </Fragment>
      </div>
    </>
  );
}

export default App;
