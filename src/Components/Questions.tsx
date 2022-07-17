import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data";
import { Question, QuestionsComponentProps } from "../Interfaces";

const Questions: React.FC<QuestionsComponentProps> = ({ total, setTotal }) => {
  let [selectedInput, setSelectedInput] = useState<string | null>();
  let [isClicked, setIsClicked] = useState<boolean>(false);
  let [isTrue, setIsTrue] = useState<boolean>();

  let { id } = useParams();
  let identifire = +id!;
  let navigate = useNavigate();
  let question: Question | undefined = questions.find((item) => item.id === identifire);

  // reset total true answers
  useEffect(() => {
    setTotal(0);
  }, []);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //   stop select another option
    setIsClicked(true);
    setSelectedInput(e.currentTarget.value);

    if (e.currentTarget.value !== question!.trueAnswer) {
      // e.target.nextSibling.style.color = "red";
      setIsTrue(false);
    } else {
      setIsTrue(true);
      setTotal(total + 1);
    }
  };

  const nextQuestionHandler = () => {
    identifire = identifire + 1;
    navigate(`/questions/${identifire > questions.length ? "finish" : identifire}`);
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
        <h1 className="text-xl text-left md:text-3xl mb-5">{question!.title}</h1>
        <ul
          className={`flex relative flex-col items-start gap-y-2 
          ${isClicked ? "after:w-full after:h-full after:absolute" : ""}`}
        >
          {question!.answers.map((item, index) => {
            return (
              <li className="flex" key={index}>
                <input
                  className="cursor-pointer mt-1 mr-2 grid content-center appearance-none bg-transparent text-transparent w-[1.1em] h-[1.1em] ring-2 ring-stone-600 border-2 border-stone-900 rounded-full before:content-none before:w-[0.65em] before:h-[0.65em] before:rounded-full before:bg-[#272f3d] checked:bg-[#6058b6]"
                  type="radio"
                  id={item.text}
                  onChange={changeHandler}
                  name={`answer${id}`}
                  value={item.text}
                  checked={selectedInput === item.text}
                />
                <label
                  htmlFor={item.text}
                  className={`text-sm font-light md:text-base cursor-pointer md:hover:text-stone-400 ${
                    isClicked && item.text === question!.trueAnswer
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
            className={`font-bold text-sm md:text-base ${
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
            className="bg-purple-700 text-sm md:text-base text-white py-1 px-5 rounded shadow"
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
