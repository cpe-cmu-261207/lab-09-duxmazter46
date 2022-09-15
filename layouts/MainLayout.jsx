import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
