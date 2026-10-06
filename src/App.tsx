import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Header from "./components/Header/Header";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import "./App.css";

function App () {
  return (
    <main className="container">
      <Header />
      <ModeSelector />
    </main>
  );
}

export default App;
