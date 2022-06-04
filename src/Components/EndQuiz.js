import { Link } from "react-router-dom";

const EndQuiz = ({ total }) => {
  return (
    <div className="rounded-lg w-80 overflow-hidden bg-stone-900 text-white shadow-md shadow-black  flex flex-col justify-start items-center text-center h-auto">
      <header className="bg-stone-600 text-stone-100 font-bold flex items-center justify-start pl-4 w-full h-10">
        <h1>its done</h1>
      </header>

      <article className="p-5">
        <p className="text-3xl font-light mb-4">true answers: {total}</p>
        <Link className="text-sm bg-purple-700 py-1 px-5 rounded shadow" to="/">
          home page
        </Link>
      </article>
    </div>
  );
};

export default EndQuiz;
