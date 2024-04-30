import { WINNER_COMBOS } from '../constants';

export const checkWinner = (boardToCheck) => {

    // Revisa todas las combinaciones ganadoras para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if(
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return null; // No hay ganador
}

export const checkEndGame = (newBoard) => {
    return newBoard.every(cell => cell !== null);
  
}