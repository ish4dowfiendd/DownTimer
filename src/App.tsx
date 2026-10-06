import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Header />
    </main>
  );
}

export default App;
