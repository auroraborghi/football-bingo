import React from "react";
import Board from './board';

interface GameState {
    size: number
}

export default class Game extends React.Component<{}, GameState> {

    constructor(props: any) {
        super(props);
        this.state = {
            size: 5
        };
    }

    render() {
        return (
            <div>
                <Board value={this.state.size}/>
            </div>
        );
    }
}