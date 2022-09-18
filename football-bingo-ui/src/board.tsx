import React from "react";
import Square from './square';
import { Grid } from '@mui/material';

interface BoardProps {
    value: number
}

export default class Board extends React.Component<BoardProps, {}> {
    // The board should be extendable (you can state how big it can be)
    // TODO: start with 3x3, 5x5, 7x7, etc. (no even numbers can be added - end goal)
    constructor(props: any) {
        super(props);
    }

    // TODO: cares about position of square and what question the square has if it has one.
        // Needs to keep track of the location and where each square location is.
    // TODO: for covered ceil(n/2) where n must be odd for the middle.

    renderSquare() {
        return <Square value={'potato'}/>;
    }

    render() {

        const size = this.props.value;
        const rows = [];
        for (let i = 0; i < size; i++) {
            rows.push(
                this.renderSquare()
            );
        }

        const cols = [];
        for (let j = 0; j < size; j++) {
            cols.push(
                <Grid container item>
                    <React.Fragment>
                        {rows}
                    </React.Fragment>
                </Grid>
            )
        }

        return (
            <div>
                <div className="board">
                    {cols}
                </div>
            </div>
        );
    }
}