import React from "react";
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

interface SquareProps {
    value: number;
}

export default class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    {this.props.value}
                </Grid>
          </React.Fragment>
        );
    }
}