import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return  (
      <button className="square" onClick={() => { alert('click'); }}>
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    const grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    return (
      <div>
        <div className="status">{status}</div>
          {
            grid.map((row) => {
              return (
                <div className="board-row">
                  {row.map((value) => this.renderSquare(value))}
                </div> 
              )
            })
          }
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

