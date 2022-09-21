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

    // A covered square doesn't have a question, otherwise it does. :D
    // add style to img to make it smaller and alt stating what it is
    /*
        {
                    this.props.isCovered ?
                        <img src={require('./football.png')}/>
                    :
                    this.props.value
                }
    */
    
    render() {
        
        return (
            <Grid item xs>
                {this.props.value}
            </Grid>
        );
    }
}