import React from "react";
import { Navbar } from "../components/Navbar";
import Sidebar from "../components/sidebar";

export const Home = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              overflowY: "scroll",
              marginLeft: "2rem",
              marginTop: "2rem",
            }}
          >
            <h1 style={{ color: "green" }}>
              A Computer Science portal for geeks.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
