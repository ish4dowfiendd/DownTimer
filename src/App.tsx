import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Header from "./components/Header/Header";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import ActionPicker from "./components/ActionPicker/ActionPicker";
import CountdownPicker from "./components/CountdownPicker/CountdownPicker";
import StartButton from "./components/StartButton/StartButton";
import "./App.css";

function App () {
  return (
    <main className="container">
      <Header />
      <ModeSelector />
      <ActionPicker />
      <CountdownPicker />
      <StartButton />
    </main>
  );
}

export default App;
