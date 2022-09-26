import React from "react";
import { Grid } from '@mui/material';

interface SquareProps {
    value: string;
    isCovered: boolean;
}

export default class Square extends React.Component<SquareProps, {}> {
    constructor(props: any) {
        super(props);
    }

    // TODO: Will need to be able to click on the squares - isCovered can count towards bingo vibes.
    // TODO: Will need to keep track of what squares have been clicked on the board.

    render() {
        return (
            <Grid item xs>
                {
                    this.props.isCovered ?
                        <img src={require('./football.png')}/>
                    :
                    this.props.value
                }
            </Grid>
        );
    }
}