import React from "react";

import Banner from "./components/banner/banner";
import Row from "./components/row/row";
import NavBar from "./components/navbar/navbar";

import * as API from "./utils/api";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title={"Trending Now"} url={API.GET_TRENDING} isLargeRow={false} />
      <Row
        title={"Netflix Originals"}
        url={API.GET_NETFLIX_ORIGINALS}
        isLargeRow={true}
      />
      <Row title={"Top Rated"} url={API.GET_TOP_RATED} isLargeRow={true} />
      <Row
        title={"Action Movies"}
        url={API.GET_ACTION_MOVIES}
        isLargeRow={true}
      />
      <Row title={"Comedy Movies"} url={API.GET_COMEDY} isLargeRow={true} />
      <Row title={"Horror Movies"} url={API.GET_HORROR} isLargeRow={true} />
      <Row title={"Romance Movies"} url={API.GET_ROMANCE} isLargeRow={true} />
      <Row
        title={"Documentaries Movies"}
        url={API.GET_DOCUMENTARIES}
        isLargeRow={true}
      />
    </div>
  );
};

export default App;
