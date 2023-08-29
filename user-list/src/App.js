import { useEffect, useState } from "react";
import "./App.css";
import load from "./Users";
import Profiles from "./Profiles";
// ProfileCard composes Avatar and UserInfo components ==> can simplify the code
import Paging from "./Paging";

function App() {
  // useState(1): start with the first page
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // hook functions: special function
  // users: array; current value
  // setUsers: function; update the current value
  // ==> update it every time rendering the page
  const [users, setUsers] = useState([]);
  // console.log("Starting App()", { users, currentPage, totalPages });
  // debugger;

  // useEffect(function, [list of dependencies])
  useEffect(() => {
    // Rerun this side effect when the current page is changed ==> currentPage should be dependency
    // console.log("useEffect() running");
    load(currentPage).then((result) => {
      console.log("load() finished", result);
      setTotalPages(result.total_pages);
      setCurrentPage(result.page);
      setUsers(result.data);
    });
  }, [currentPage]);
  // console.log("rendering react elements");
  // const users = load();
  /*
  const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
  ];
  */

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  // id, email, name, avatarUrl
  return (
    <div className="App">
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Profiles users={users} />
      {/* {profiles} */}
      {/* <ProfileCard
        id={user.id}
        email={user.email}
        name={name}
        avatarUrl={user.avatar}
      /> */}
    </div>
  );
}

export default App;
