import React from "react";
import * as Q from "./question-bank";

export const getQuestions = (size: number) => {
    const commonQuestions = getCommonQuestions(size);
    const uncommonQuestions = getUncommonQuestions(size);
    const rareQuestions = getRareQuestions(size);
    const questions = commonQuestions.concat(uncommonQuestions, rareQuestions);
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, (size * size));
}

/**
 * A bingo board should have 60% common questions, 30% uncommon questions, and 10% rare questions.
 * That is my hypothesis at least.
 */
export const getCommonQuestions = (size: number) => {
    const numberOfQuestions = Math.floor((size * size) * 0.6);
    const shuffledQuestions = Q.COMMON_QUESTIONS.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numberOfQuestions);
}

export const getUncommonQuestions = (size: number) => {
    const numberOfQuestions = Math.floor((size * size)  * 0.3);
    const shuffledQuestions = Q.UNCOMMON_QUESTIONS.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numberOfQuestions);
}

export const getRareQuestions = (size: number) => {
    const numberOfQuestions = Math.ceil((size * size) * 0.1);
    const shuffledQuestions = Q.RARE_QUESTIONS.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numberOfQuestions);
}