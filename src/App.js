import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import EndQuiz from "./Components/EndQuiz";
import NotFound from "./Components/NotFound";
import Questions from "./Components/Questions";
import StartQuiz from "./Components/StartQuiz";

function App() {
  let [total, setTotal] = useState(0);

  return (
    <div className="App w-full min-h-screen bg-stone-200 flex justify-center items-start p-5">
      <Routes>
        <Route path="/" element={<StartQuiz />} />
        <Route
          path="/questions/:id"
          element={<Questions total={total} setTotal={setTotal} />}
        />
        <Route path="/questions/finish" element={<EndQuiz total={total} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
