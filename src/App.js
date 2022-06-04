import { Route, Routes } from "react-router-dom";
import EndQuiz from "./Components/EndQuiz";
import Questions from "./Components/Questions";
import StartQuiz from "./Components/StartQuiz";

function App() {
  return (
    <div className="App w-full min-h-screen bg-stone-200 flex justify-center items-start p-5">
      <Routes>
        <Route path="/" element={<StartQuiz />} />
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="/questions/finish" element={<EndQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
