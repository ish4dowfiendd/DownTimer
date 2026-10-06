import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Header from "./components/Header/Header";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import ActionPicker from "./components/ActionPicker/ActionPicker";
import CountdownPicker from "./components/CountdownPicker/CountdownPicker";
import "./App.css";

function App () {
  return (
    <main className="container">
      <Header />
      <ModeSelector />
      <ActionPicker />
      <CountdownPicker />
    </main>
  );
}

export default App;
