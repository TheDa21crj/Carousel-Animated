import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));

// Loading
import Loading from "./MicroInterAction/Loading";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="pageExt">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Error />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
