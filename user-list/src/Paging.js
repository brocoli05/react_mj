import "./Paging.css";

// Change the page
function Paging({ current, total, onPageChange }) {
  // Call the onPageChange function when the button is clicked
  const onclickHandler = () => {
    let newPage;

    if (current === total) {
      newPage = current - 1;
    } else {
      newPage = current + 1;
    }
    console.log("onclickHandler", current, total);
    onPageChange(newPage);
  };

  // Set the label based on the current page number and total number of pages
  const label = current === total ? "Previous" : "Next";

  return (
    <button className="paging-button" onClick={onclickHandler}>
      {label}
    </button>
  );
}

export default Paging;
