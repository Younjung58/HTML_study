// 여기는 테트리스의 보드(셀로구성)를 나타내기 위한 코드를 작성할 클래스

class Board {
    grid;

    // 게임 시작시에 보드를 초기화
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // 0으로 채워져있는 행렬을 얻어오기
    getEmptyBoard(){    // 보드는 행들의 배열이다. 2차원 배열 또는 행렬이라고 부름
        return Array.from(
            {length : ROWS}, () => Array(COLS).fill(0)  
                // 행의 길이만큼, 열이 0으로 채워진 형태의 배열(2차원 배열의 형태)을 반환
        );
    }

    valid(p){
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return(
                    value === 0 || (this.isInsideWalls(x, y))
                        // 이동값이 0이거나 이동하려는 위치가 비어있고, 보드판 내에 존재할 경우 true를 반환
                )
            })
        })
    }
    
    isInsideWalls(x, y) {
        return x >= 0 && x < COLS && y < ROWS;
    }

    notOccupied(x, y) {
        return (this.grid[y][x]===0);           /// 안됨,,, 일단 보류
    }

    rotate(p){
        // for (let y = 0; y < p.shape.length; ++y) {
        //     for (let x = 0; x < y; ++x) {
        //       [p.shape[x][y], p.shape[y][x]] = 
        //       [p.shape[y][x], p.shape[x][y]];
        //     }
        //   }
          
        if (!piece.hardDropped) {
            // Transpose matrix
            for (let y = 0; y < p.shape.length; ++y) {
              for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
              }
            }
            // Reverse the order of the columns.
            if (direction === ROTATION.RIGHT) {
              p.shape.forEach((row) => row.reverse());
            } else if (direction === ROTATION.LEFT) {
              p.shape.reverse();
            }
          }
      
          return p;
        }
}
