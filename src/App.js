import React from "react";
import SearchPage from "./pages/SearchPage";
// import EventPage from ".pages/EventPage";
// import ArtistPage from "./pages/ArtistPage";

function App(props) {
  const renderPage = params => {
    return <SearchPage />;
  };

  console.log(props.match.params);

  return <div className="App">{renderPage(props.match.params)}</div>;
}

export default App;
