function randomPosition(sideLength) {
  let newCells = {};
  for (let y = 0; y < sideLength; y++) {
    for (let x = 0; x < sideLength; x++) {
      const exist = Math.round(Math.random());
      if (exist) {
        newCells[`${x}:${y}`] = true;
      }
    }
  }
  return newCells;
}

export default randomPosition;