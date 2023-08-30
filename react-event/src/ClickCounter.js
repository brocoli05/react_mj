function ClickCounter({ clicks, onClick }) {
  return (
    /*
    onClick={(e) => setNumClicks(clicks + 1)}
    : CANNOT access setNumClicks from parent component ==> need to add onClick prop
    */
    <button className="click-button" onClick={onClick}>
      Clicks {clicks}
    </button>
  );
}

export default ClickCounter;
