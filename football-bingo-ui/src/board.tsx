import React, {useState, useEffect} from "react";
import Square from './square';
import { Grid, Box } from '@mui/material';
import * as Questions from './questions';
import './styles/square.css';

interface BoardProps {
    value: number
}

interface BoardState {
    bingo: boolean,
    questions: string[]
}

export default class Board extends React.Component<BoardProps, BoardState> {
    // TODO - start with 3x3, 5x5, 7x7, etc. (no even numbers can be added - end goal)
    constructor(props: any) {
        super(props);

        this.state = {
            bingo: false,
            questions: Questions.getQuestions(this.props.value)
        }
    }

    // If you have a row of covered squares then you have Bingo!!!
    renderSquare(colIdx: number, rowIdx: number) {
        const {questions} = this.state;
        const baseSquare = Math.floor(this.props.value/2);
        const idx = `${colIdx},${rowIdx}`;
        
        const question = questions.shift() ?? '';
        questions.push(question);

        return <Square
                    key={idx}
                    value={question}
                    isCovered={rowIdx === baseSquare && colIdx === baseSquare}/>;
    }

    renderRows(colIdx: number) {
        const rows: any[] = [];
        for (let rowIdx = 0; rowIdx < this.props.value; rowIdx++) {
            rows.push(
                this.renderSquare(colIdx, rowIdx)
            );
        }
        return rows;
    }

    renderBoard() {
        const cols: any[] = [];
        for (let colIdx = 0; colIdx < this.props.value; colIdx++) {
            cols.push(
                <Grid container item
                direction='row'
                    justifyContent="center"
                    alignItems="stretch">
                    <React.Fragment>
                        {this.renderRows(colIdx)}
                    </React.Fragment>
                </Grid>
            )
        }
        return cols;
    }

    render() {
        return (
            <Box>
                <Grid 
                container
                direction='row'
                justifyContent="center"
                alignItems="stretch">
                    {this.renderBoard()}
                </Grid>
            </Box>
        );
    }
}