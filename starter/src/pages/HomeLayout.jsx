import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function HomeLayout() {
  const { state } = useNavigation();

  return (
    <div>
      <Header />
      <Navbar />
      {state === "loading" && <Loading />}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
}

export default HomeLayout;
