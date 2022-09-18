import { Typography } from "@mui/material";
import React from "react";
import Board from './board';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}