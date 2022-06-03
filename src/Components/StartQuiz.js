import { Link } from "react-router-dom";
import { questions } from "../data";

const StartQuiz = () => {
  return (
    <div className="rounded-lg bg-stone-900 text-white shadow-md shadow-black p-3 flex flex-col gap-y-7 justify-center items-center text-center w-96  h-48">
      <div>
        <h1 className="text-4xl mb-2 font-light">the HTML quiz</h1>
        <p className="text-md">
          <strong>number of questions: </strong>
          {questions.length}
        </p>
      </div>
      <Link
        className="px-8 py-1 border border-stone-900 bg-purple-700 rounded hover:border hover:border-purple-500 hover:bg-transparent hover:text-purple-500 transition-all"
        to="/questions/1"
      >
        Start
      </Link>
    </div>
  );
};

export default StartQuiz;
