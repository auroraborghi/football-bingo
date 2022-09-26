import React from "react";
import * as Q from "./question-bank";

interface QuestionsState {
    questions: string[];
}

export default class Questions extends React.Component<{}, QuestionsState> {

    constructor(props: any) {
        super(props);

        this.state = {
            questions: []
        }
    }

    /**
     * A bingo board should have 60% common questions, 30% uncommon questions, and 10% rare questions.
     * That is my hypothesis at least.
     */

    getCommonQuestions() {
        // return randomized list of common questions based on the percentage of the size of the bingo board
        let commonQuestions = Q.COMMON_QUESTIONS;
    }

    getUncommonQuestions() {
        // return randomized list of uncommon questions based on the percentage of the size of the bingo board
    }

    getRareQuestions() {
        // return randomized list of rare questions based on the percentage of the size of the bingo board

    }
}