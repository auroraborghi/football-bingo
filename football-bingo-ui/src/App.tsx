import { Typography } from '@mui/material';
import './App.css';
import Game from './game';

function App() {
  return (
    <div className="App">
      <Typography variant='h4' gutterBottom={true}>
        {'Football Bingo'}
      </Typography>
      <Game/>
    </div>
  );
}

export default App;
