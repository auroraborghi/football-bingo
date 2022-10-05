import React from "react";
import { Grid, Button } from '@mui/material';
import './styles/square.css';

interface SquareProps {
    value: string;
    isCovered: boolean;
}

interface SquareState {
    isCoveredQuestion: boolean;
}

export default class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isCoveredQuestion: false
        }
    }

    _onClick = () => {
        this.setState({
            isCoveredQuestion: !this.state.isCoveredQuestion
        });
    }

    // TODO: Will need to keep track of what squares have been clicked on the board.

    render() {
        const {isCoveredQuestion} = this.state

        // TODO Could make middle button a disabled button...

        return (
            <Grid item xs zeroMinWidth
                justifyContent="center"
                direction='row'
                alignItems="stretch">
                <Button 
                    className={'ButtonStyling'}
                    onClick={this._onClick}>
                    {
                        (this.props.isCovered || isCoveredQuestion) 
                        ?
                            <img src={require('./football.png')}/>
                        :
                        this.props.value
                    }
                </Button>
            </Grid>
        );
    }
}