// http://api.artic.edu/docs/#quick-start
/*
  1) Passing the data from queries into the Search component
  2) Update the value
*/

import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Artsy</Navbar.Brand>
        </Navbar>
        <div className="painting-background">
          <Container fluid>
            <h1>Find Art You Love</h1>
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
            <hr className="my-4" />
          </Container>
        </div>
      </header>
      <main>
        <Container fluid>
          <SearchResults query={query} />
        </Container>
      </main>
    </div>
  );
}

export default App;
