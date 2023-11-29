import React from 'react';
import Tetris from './components/Tetris';
import Background from './components/Background';

const App = () => (
  <Background className='App'>
    <Tetris />
  </Background>
)

export default App;
