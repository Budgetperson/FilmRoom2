import React, { Component } from 'react';
import { Link } from 'react-router'

const GamesList = ({ games, onDelete }) => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>Opponent</th>
        <th>Final Score</th>
        <th>Box Score</th>
        <th>Game Flow</th>
        <th>Edit Metadata</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game) => {
        return (
          <tr key={game.id}>
            <td>{game.opponent}</td>
            <td>{game.points_scored} - {game.opponent_points_scored}</td>
            <td><Link to="box" params={{id: game.id}}>Box</Link></td>
            <td><Link to="flow" params={{id: game.id}}>Game Flow</Link></td>
            <td><Link to="game" params={{id: game.id}}>Edit</Link></td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default GamesList;
