import React from "react";
import Square from './square';
import { Grid } from '@mui/material';
import { ViewColumnSharp } from "@mui/icons-material";

interface BoardProps {
    value: number
}

interface BoardState {
    
}

export default class Board extends React.Component<BoardProps, {}> {
    // TODO: start with 3x3, 5x5, 7x7, etc. (no even numbers can be added - end goal)
    constructor(props: any) {
        super(props);
    }

    // If you have a row of covered squares then you have Bingo!!!
    renderSquare(colIdx: number, rowIdx: number) {
        const baseSquare = Math.floor(this.props.value/2);
        return <Square 
                    key={`${colIdx},${rowIdx}`} 
                    value={`${colIdx},${rowIdx}`} 
                    isCovered={rowIdx === baseSquare && colIdx === baseSquare}/>;
    }

    renderRows(colIdx: number) {
        const rows = [];
        for (let rowIdx = 0; rowIdx < this.props.value; rowIdx++) {
            rows.push(
                this.renderSquare(colIdx, rowIdx)
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