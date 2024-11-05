// 여기는 캔버스 엘리먼트와 샌버스 엘리먼트의 2d 컨텍스트를 얻고
// constant에서 정의한 상수로 크기를 설정할 공간, main공간
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 상수를 이용하여 캔버스 크기를 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS *  BLOCK_SIZE;

// 블록의 크기 변경
ctx.scale(BLOCK_SIZE,BLOCK_SIZE);   
    // scale(x,y) -> x는 수평방향의 배율, y는 수직방향의 배율

let bbb = new Board();        // Board클래스 객체를 생성

function play() {
    // board.reset();
    
    addEventListener()
    board = bbb.getEmptyBoard();
    let piece = new Piece(ctx);
    piece.draw();

    bbb.piece = piece;
}

// 키보드이벤트를 연결해야 보드에서 조각을 움직이게 할 수 있다.
// move함수는 보드 위에서 위치를 변경하기 위하여 현재 조각의 x또는 y속성값을 변경한다.
// 함수내에서 spread연산자(...)를 piece에 적용하여 전달된 객체의 복제본을 효과적으로 생성하고
// 속성을 수정한 새로운 객체를 정의한다(각각 x, y)
// moves[KEY.LEFT]는 함수에 대한 참조를 말한다. 
// 또한 이 함수는 p를인수로 허용하며 piece(p)를 함수호출구역에 전달할 수 있다.
const moves = {
    [KEY.LEFT] : p => ({...p, x: p.x-1}),       // 속성을 수정한 새로운 객체를 정의, 함수 호출구역에 전달
    [KEY.RIGHT] : p => ({...p, x:p.x+1}),
    [KEY.DOWN] : p => ({...p, y:p.y+1}),
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
    [KEY.UP]: (p) => board.rotate(p, ROTATION.RIGHT),
    [KEY.Q]: (p) => board.rotate(p, ROTATION.LEFT)
    // [KEY.DOWN] : p => ({...p, y:p.y+1})
} 

// const p = this.moves[event.key](this.piece);
function addEventListener() {
    document.removeEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown',handleKeyPress);
}
let p;
function handleKeyPress(event){
    // console.table(board.grid);      // 보드 형성을 확인하기 위함
    if(moves[event.keyCode]) {
        // 이벤트 버블링 : 이벤트가 발생한 요소부터 점점 부모 요소를 거슬러 올라가서 window까지 이벤트를 전파
        // 마치 거품이 물아래에서부터 위로 올라가는 것처럼 이루어짐
        // 아래 코드는 버블링을 막기 위한 코드이다.
        event.preventDefault();

        // 원본 조각을 변화시키고 싶지 않기때문에 새로운 상태의 조각을 얻기 위하여 아래 코드 작성
        // 이를 통하여 항상 새로운 위치로 조각을 움직이지 않을 수 있다.
        p = moves[event.keyCode](bbb.piece);
                                        // 현재 보드의 조각의 위치를 새로정의하기 위해서 넘김
        // alert(typeof(bbb.valid(p)))
        if(bbb.valid(p)){
            // 넘겨받은 좌표값을 이용하여 이동이 가능한 상태를 판별 -> true면 조각 이동

            bbb.piece.move(p);

            // 그리기 전의 좌표 지우기
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
            // 새로 조각 그리기
            bbb.piece.draw()
        }
    }
    if(event.keyCode === KEY.SPACE){
        if(bbb.valid(p)){
            // 넘겨받은 좌표값을 이용하여 이동이 가능한 상태를 판별 -> true면 조각 이동

            bbb.piece.move(p);

            // 그리기 전의 좌표 지우기
            ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
            // 새로 조각 그리기
            bbb.piece.draw()
        }
    }
}