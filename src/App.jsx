import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Loading
import Loading from "./MicroInterAction/Loading";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="pageExt">
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          Hello World
        </div>
      </div>
    </BrowserRouter>
  );
}
