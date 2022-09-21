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

    getCommonQuestions() {
        let commonQuestions = Q.COMMON_QUESTIONS;
    }

    getUncommonQuestions() {

    }

    getRareQuestions() {

    }
}