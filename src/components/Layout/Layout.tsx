import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
          <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
          </Suspense>
      </main>
    </>
  );
};

export default Layout;