// ゲームの基本設定
const gridHeight = 10;
const gridWidth = 10;
const mines = 20;

// ゲームボードを作成する
let board = [];
for(let i=0; i<gridHeight; i++) {
    board[i] = [];
    for(let j=0; j<gridWidth; j++) {
        board[i][j] = {
            isMine: false,
            isRevealed: false,
            mineCount: 0
        };
    }
}

// 地雷をランダムに配置する
for(let i=0; i<mines; i++) {
    let minePosition;
    do {
        minePosition = {
            x: Math.floor(Math.random() * gridWidth),
            y: Math.floor(Math.random() * gridHeight)
        };
    } while(board[minePosition.y][minePosition.x].isMine);
    board[minePosition.y][minePosition.x].isMine = true;
}

// 各セルの周囲の地雷数を計算する
for(let i=0; i<gridHeight; i++) {
    for(let j=0; j<gridWidth; j++) {
        if(board[i][j].isMine) continue;
        let mineCount = 0;
        for(let dx=-1; dx<=1; dx++) {
            for(let dy=-1; dy<=1; dy++) {
                if(i+dy>=0 && i+dy<gridHeight && j+dx>=0 && j+dx<gridWidth && board[i+dy][j+dx].isMine) {
                    mineCount++;
                }
            }
        }
        board[i][j].mineCount = mineCount;
    }
}

// ゲームボードを表示する関数
function printBoard() {
    for(let i=0; i<gridHeight; i++) {
        let row = '';
        for(let j=0; j<gridWidth; j++) {
            if(board[i][j].isRevealed) {
                row += board[i][j].isMine ? 'M' : board[i][j].mineCount;
            } else {
                row += '?';
            }
            row += ' ';
        }
        console.log(row);
    }
}

// セルを明らかにする関数
function reveal(x, y) {
    if(x<0 || x>=gridWidth || y<0 || y>=gridHeight || board[y][x].isRevealed) return;
    board[y][x].isRevealed = true;
    if(board[y][x].mineCount===0) {
        for(let dx=-1; dx<=1; dx++) {
            for(let dy=-1; dy<=1; dy++) {
                reveal(x+dx, y+dy);
            }
        }
    }
}

// ゲームを始める
printBoard();
reveal(0, 0);
console.log('---');
printBoard();
