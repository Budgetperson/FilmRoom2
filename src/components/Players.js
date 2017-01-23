import React, { Component } from 'react';

const Players = ({ players, onDelete }) => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Delete?</th>
      </tr>
    </thead>
    <tbody>
      {players.map((player) => {
        return (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.id}</td>
            <td onClick={() => onDelete(player.id)}>del</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default Players;
