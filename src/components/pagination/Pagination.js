import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { prevPage, nextPage } from "../../features/currentPage/currentPageSlice";

function Pagination() {
  const requestInfo = useSelector((state) => state.requestData.requestInfo);
  const currentPage = useSelector((state) => state.currentPage.value);
  const dispatch = useDispatch();

  return (
    <div className="Pagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => dispatch(prevPage())}
      >
        &#60; Prev page
      </button>

      <button
        disabled={requestInfo.pages ? currentPage >= requestInfo.pages : true}
        onClick={() => dispatch(nextPage())}
      >
        Next page &#62;
      </button>
    </div>
  );
}

export default Pagination;
