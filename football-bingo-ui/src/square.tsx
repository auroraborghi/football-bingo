import React from "react";
import { Grid } from '@mui/material';
import { number} from "prop-types";

interface SquareProps {
    value: string;
}

export default class Square extends React.Component<SquareProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isCovered: false,
            hasQuestion: true
        }
    }

    render() {
        return (
            <Grid item xs>
                {this.props.value}
            </Grid>
        );
    }
}