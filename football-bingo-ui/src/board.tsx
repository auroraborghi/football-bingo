import React from "react";
import Square from './square';
import { Grid } from '@mui/material';

export default class Board extends React.Component {
    // The board should be extendable (you can state how big it can be)
    // start with 3x3, 5x5, 7x7, etc. (no even can be added)

    renderSquare(i: number) {
        return <Square value={i}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    <Grid container>
                        <Grid container item>
                            {this.renderSquare(0)}
                        </Grid>
                        <Grid container item>
                            {this.renderSquare(1)}
                        </Grid>
                        <Grid container item>
                            {this.renderSquare(2)}
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}