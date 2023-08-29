// Change the page
function Paging({ current, total, onPageChange }) {
  let label = current === total ? "Previous" : "Next";

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

  return (
    <div>
      <button onClick={onclickHandler}>{label}</button>
    </div>
  );
}

export default Paging;
