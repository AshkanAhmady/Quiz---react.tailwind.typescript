import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data";

const Questions = ({ total, setTotal }) => {
  let [selectedInput, setSelectedInput] = useState();
  let [isClicked, setIsClicked] = useState(false);
  let [isTrue, setIsTrue] = useState();

  let { id } = useParams();
  let navigate = useNavigate();
  let question = questions.find((item) => item.id == id);

  // reset total true answers
  useEffect(() => {
    setTotal(0);
  }, []);

  const changeHandler = (e) => {
    //   stop select another option
    setIsClicked(true);
    setSelectedInput(e.target.value);

    if (e.target.value !== question.trueAnswer) {
      // e.target.nextSibling.style.color = "red";
      setIsTrue(false);
    } else {
      setIsTrue(true);
      setTotal(total + 1);
    }
  };

  const nextQuestionHandler = () => {
    id = parseInt(id) + 1;
    navigate(`/questions/${id > questions.length ? "finish" : id}`);
    setIsClicked(false);
    setSelectedInput(null);
    console.log(total);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-stone-900 text-white shadow-md shadow-black  flex flex-col justify-start items-center text-center h-auto">
      <header className="bg-stone-600 text-stone-100 font-bold flex items-center justify-start pl-4 w-full h-10">
        question: {id}
      </header>
      <article className="p-5">
        <h1 className="text-3xl mb-5">{question.title}</h1>
        <ul
          className={`flex relative flex-col items-start gap-y-2 
          ${isClicked ? "after:w-full after:h-full after:absolute" : ""}`}
        >
          {question.answers.map((item, index) => {
            return (
              <li key={index}>
                <input
                  // hidden
                  type="radio"
                  id={item.text}
                  onChange={changeHandler}
                  name={`answer${id}`}
                  value={item.text}
                  checked={selectedInput === item.text}
                />
                <label
                  htmlFor={item.text}
                  className={`mr-1 cursor-pointer hover:text-stone-400 ${
                    isClicked && item.text == question.trueAnswer
                      ? "text-green-400"
                      : ""
                  }`}
                >
                  {item.text}
                </label>
              </li>
            );
          })}
        </ul>
        <div
          className={` w-full mt-4 items-center justify-between bg-stone-800 p-2 rounded-lg ${
            isClicked ? "flex" : "hidden"
          }`}
        >
          <span
            className={`font-bold ${
              isTrue ? "text-green-400" : "text-red-400"
            }`}
          >
            {isTrue === true
              ? "Your answer was true"
              : isTrue === false
              ? "Your answer was false"
              : ""}
          </span>
          <button
            className="bg-purple-700 text-white py-1 px-5 rounded shadow"
            onClick={nextQuestionHandler}
          >
            Next
          </button>
        </div>
      </article>
    </div>
  );
};

export default Questions;
