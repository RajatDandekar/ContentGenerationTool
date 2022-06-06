import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageLinks } from "./ChapterInfo";
// import AuthRoute from "../../../client/util/AuthRoute";

//Class 8 Chapter 16 Light

import VizBook1 from "./VizBook1";


import ReactGa from "react-ga";
import { useEffect } from "react";

const RouterPage = () => {
  useEffect(() => {
    ReactGa.initialize("UA-165348742-2");
    //report pageview
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Route
        path= {`${PageLinks[0]}`}
        exact
        component={VizBook1}
      />
      <Route
        path={`${PageLinks[1]}`}
        exact
        component={VizBook1}
      />
      <Route
        path= {`${PageLinks[0]}`}
        exact
        component={VizBook1}
      />
      <Route
        path={`${PageLinks[1]}`}
        exact
        component={VizBook1}
      />
      <Route
        path= {`${PageLinks[0]}`}
        exact
        component={VizBook1}
      />
    </>
  );
};

export default RouterPage;
