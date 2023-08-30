import { useState, useEffect } from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import ClickHeading from "./ClickHeading";
import Loading from "./Loading";
import Users from "./Users";
import Warning from "./Warning";

function App() {
  const [selected, setSelected] = useState(null);
  const [numClicks, setNumClicks] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    setLoading(true);
    //`http://reqres.in/api22/users?delay=3&${retries}` : invalid url
    fetch(`http://reqres.in/api/users?delay=3&${retries}`) // &{retries}: clear the cache
      .then((res) => {
        if (!res.ok) {
          throw new Error("unable to download users");
        }
        return res.json();
      })
      .then((result) => {
        // Once when we get the data
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err); // if there is an error like calling an invalid url
      })
      .finally(() => {
        // At the end, set loading to false(loaing is done)
        setLoading(false);
      });
    console.log("useEffect() was run");
  }, [retries]);
  console.log("rendering..."); // renders first

  const onClickHandler = (e) => setNumClicks(numClicks + 1);
  // setNumClicks: increase the number of clicks by 1

  const handleSelect = (user) => setSelected(user);

  if (error) {
    // tryAgain: to activate the button again if there is an error
    return <Warning tryAgain={() => setRetries(retries + 1)} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        <ClickHeading clicks={numClicks} />
        <ClickCounter clicks={numClicks} onClick={onClickHandler} />
      </div>
      {/* <div>Loading = {loading ? "true" : "false"}</div> */}
      {/* {loading ? (
        <Loading />
      ) : (
        <Users users={users} onSelected={handleSelect} />
      )} */}
      <Users users={users} onSelected={handleSelect} />
      <div>
        {selected ? (
          <span>{`${selected.first_name} ${selected.last_name}`}</span>
        ) : null}
      </div>
    </div>
  );
}

export default App;
