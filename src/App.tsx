import Header from "./components/Header/Header";
import ScheduleSetup from "./components/ScheduleSetup/ScheduleSetup";
import Countdown from "./components/Countdown/Countdown";
import AlertBox from "./components/AlertBox/AlertBox";
import "./App.css";

function App () {
  return (
    <main className="container">
      <Header />
      <ScheduleSetup />
      <Countdown />
      <AlertBox />
    </main>
  );
}

export default App;
