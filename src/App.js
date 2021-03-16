import React from "react";
import Banner from "./components/banner/banner";
import Row from "./components/row/row";
import requests from "./requests";
import "./App.scss";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title={"Trending Now"}
        url={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title={"Netflix Originals"}
        url={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Top Rated"} url={requests.fetchTopRated} isLargeRow={true} />
      <Row
        title={"Action Movies"}
        url={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title={"Comedy Movies"}
        url={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title={"Horror Movies"}
        url={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title={"Romance Movies"}
        url={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title={"Documentaries Movies"}
        url={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </div>
  );
};

export default App;
