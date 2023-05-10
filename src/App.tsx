import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "utils";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {Router.map((route, index) => {
              const { path, Component, Layout } = route;
              const PageComponent = (
                <Layout>
                  <Component />
                </Layout>
              );
              return <Route key={index} path={path} element={PageComponent} />;
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
