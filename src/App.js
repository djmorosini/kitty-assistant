import React, { Component } from 'react';
import TypingGame from './TypingGame'
import YarnKitty from './sounds/Yarn_Kitty.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGame: null
    }
  }

  updateGame = (game) => {
    if (game === 'typing') {
      this.setState({ currentGame: game })
    } else {
      this.setState({ currentGame: null })
    }
  }

  render() {
    let currentGame = this.state.currentGame
    if (currentGame === null) {
      return (
        <div className="App">
          <h1>Kitty Assistant</h1>
          <img src={YarnKitty} alt='kitty-assistant' />
          <h2>Choose Game</h2>
          <button onClick={() => this.updateGame('typing')}>Typing</button>
        </div>
      );
    } else if (currentGame === 'typing') {
      return (
        <div id='typing-game'>
          <TypingGame updateGame={this.updateGame} />
        </div>
      )
    }
  }
}

export default App;
