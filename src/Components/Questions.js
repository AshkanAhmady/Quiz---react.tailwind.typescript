import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../data";

const Questions = () => {
  let [isClicked, setIsClicked] = useState(false);
  let [isTrue, setIsTrue] = useState();
  let { id } = useParams();
  let question = questions.find((item) => item.id == id);

  const clickHandler = (e) => {
    //   stop select another option
    setIsClicked(true);

    if (e.target.value !== question.trueAnswer) {
      e.target.nextSibling.style.color = "red";
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
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
              <div key={index}>
                <input
                  onClick={clickHandler}
                  hidden
                  name={`answer${id}`}
                  type="radio"
                  id={item.text}
                  value={item.text}
                />
                <label
                  className={`mr-1 cursor-pointer hover:text-stone-400 ${
                    isClicked && item.text == question.trueAnswer
                      ? "text-green-400"
                      : ""
                  }`}
                  htmlFor={item.text}
                >
                  {item.text}
                </label>
              </div>
            );
          })}
        </ul>
        <div className="flex w-full mt-4 items-center justify-between bg-stone-800 p-2 rounded-lg">
          <span
            className={`font-bold ${
              isTrue ? "text-green-400" : "text-red-400"
            }`}
          >
            {isTrue === true
              ? "Your answer was true"
              : isTrue === false
              ? "Your answe was false"
              : ""}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Questions;
