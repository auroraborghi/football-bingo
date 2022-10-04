import React from "react";
import Square from './square';
import { Grid } from '@mui/material';
import * as Questions from './questions';

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

    getQuestion() {
        
    }

    // If you have a row of covered squares then you have Bingo!!!
    renderSquare(colIdx: number, rowIdx: number) {
        const baseSquare = Math.floor(this.props.value/2);
        const idx = `${colIdx},${rowIdx}`;
        return <Square 
                    key={idx} 
                    value={idx} // TODO - This will be the question to pass in once populated.
                    isCovered={rowIdx === baseSquare && colIdx === baseSquare}/>;
    }

    renderRows(colIdx: number) {
        const rows = [];
        for (let rowIdx = 0; rowIdx < this.props.value; rowIdx++) {
            rows.push(
                this.renderSquare(colIdx, rowIdx,)
            );
        }
        return rows;
    }

    renderBoard() {
        const cols = [];
        for (let colIdx = 0; colIdx < this.props.value; colIdx++) {
            cols.push(
                <Grid container item>
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
            <div>
                <div className="board">
                    {this.renderBoard()}
                </div>
            </div>
        );
    }
}