import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test/Test";
import { AppProvider } from "./provider/provider";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
  return (
    <AppProvider>
      <Stopwatch />
      {/* <Test /> */}
    </AppProvider>
  );
}

export default App;
