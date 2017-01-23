import React, { Component } from 'react';

export const PlayerSelector = ({ players, currentPlayerId, changePlayerToId }) => {
  const selectValue = currentPlayerId !== null ? String(currentPlayerId) : 'none';

  const handlePlayerChange = (e) => changePlayerToId(e.target.value);

  return (
    <select value={selectValue} onChange={handlePlayerChange}>
      <option value="none">None</option>
      {players.map((player) => {
        return (<option key={player.id} value={player.id}>{player.name}</option>)
      })}
    </select>
  )
}

const LineupEditor = ({ players, currentLineupIds, changePlayerAt }) => {
  return (
    <div className="lineupEditor">
      {currentLineupIds.map((player_id, i) => {
        return (<PlayerSelector players={players} currentPlayerId={player_id} changePlayerToId={(newId) => changePlayerAt(i, newId)} />)
      })}
    </div>
  )

}

export default LineupEditor;
