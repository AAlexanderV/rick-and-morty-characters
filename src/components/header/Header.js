import "./Header.css";
import { useSelector, useDispatch } from "react-redux";

import { setFilterName } from "../../features/filterParameters/filterParametersSlice";
import { setPage } from "../../features/currentPage/currentPageSlice";

import AccountInfo from "../accountInfo/AccountInfo";

function Header() {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filterParameters.name);

  return (
    <div className="Header">
      <AccountInfo />

      <div className="logo">
        <img
          src={require("../../data/images/header_logo.png")}
          alt="Rick and Morty Logo"
        />
      </div>

      <div className="filter">
        <div className="input_box">
          <svg className="search_svg">
            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" />
          </svg>

          <input
            className="filter_input"
            autoComplete="on"
            id="filter_input"
            name="filter_input"
            type="text"
            value={filterName}
            placeholder="Filter by name..."
            onChange={(e) => {
              dispatch(setFilterName(e.target.value));
              dispatch(setPage(1));
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
