let board = document.getElementById('board');

let mines = Array(10).fill().map(() => Array(10).fill(0));
for(let i = 0; i < 20; i++) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  mines[x][y] = 1;
}

for(let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
  for(let j = 0; j < 10; j++) {
    let cell = document.createElement('td');
    cell.onclick = function() {
      cell.textContent = countMines(i, j);
      cell.onclick = null;
    };
    row.appendChild(cell);
  }
  board.appendChild(row);
}

function countMines(x, y) {
  let count = 0;
  for(let dx = -1; dx <= 1; dx++) {
    for(let dy = -1; dy <= 1; dy++) {
      let nx = x + dx;
      let ny = y + dy;
      if(nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && mines[nx][ny]) {
        count++;
      }
    }
  }
  return count;
}
