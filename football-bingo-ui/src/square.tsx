import React from "react";
import { Grid } from '@mui/material';
import { number} from "prop-types";

interface SquareProps {
    value: string;
    // isCovered: boolean
}

export default class Square extends React.Component<SquareProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Grid item xs>
                {this.props.value}
            </Grid>
        );
    }
}