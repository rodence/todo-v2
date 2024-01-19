import { Route, Router, Routes } from "react-router-dom";
import { AllTask } from "./component/allTask";
import { OngoingTask } from "./component/ongoingTask";
import { CompletedTask } from "./component/completedTask";
import { CancelledTask } from "./component/cancelled";

function App() {
  return (
    <div>
      <AllTask />
      <Routes>
        <Route path="/" element={<AllTask />} />
        <Route path="/ongoing" element={<OngoingTask />} />
        <Route path="/completed" element={<CompletedTask />} />
        <Route path="/cancelled" element={<CancelledTask />} />
      </Routes>
    </div>
  );
}

export default App;
