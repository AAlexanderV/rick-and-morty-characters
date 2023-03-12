import { useSelector, useDispatch } from "react-redux";
import { googleLogout } from "@react-oauth/google";

import "./AccountInfo.css";
import { signOut } from "../../features/loggedUser/loggedUserSlice";
import { setFilterName } from "../../features/filterParameters/filterParametersSlice";
import { setPage } from "../../features/currentPage/currentPageSlice";

function AccountInfo() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser.data);

  return (
    <div className="AccountInfo">
      <div className="user_details">
        <div className="user_name">
          Hello, <span>{loggedUser.given_name}</span>
        </div>

        <div className="user_img">
          <img
            src={loggedUser.picture}
            alt={"photo of user, " + loggedUser.name}
          />
        </div>
      </div>

      <button
        onClick={() => {
          googleLogout();
          dispatch(signOut());
          dispatch(setFilterName(""));
          dispatch(setPage(1));
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default AccountInfo;
