import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap minified version, npm install react-bootstrap bootstrap
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  // If we have a code, render the Dashboard component and pass the code
  // Otherwise, render the Login component
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
