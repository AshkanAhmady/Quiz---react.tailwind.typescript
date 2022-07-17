import { Dispatch, SetStateAction } from "react";

export interface Question {
    id: number;
    title: string;
    answers: {
        text: string;
    }[];
    trueAnswer: string;
}

export interface EndQuizComponentProps{
    total: number
}
// ##############
// ##############
// ##############





export interface QuestionsComponentProps{
    total: number;
    setTotal: Dispatch<SetStateAction<number>>;
}