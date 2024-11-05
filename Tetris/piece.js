class Piece {
    x; y; color; shape; ctx;

    constructor(ctx){       // 생성자임
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        this.shape = [[2,0,0],[2,2,2],[0,0,0]];     
                // 중심을 회전시키기 위하여 모양 이외의 부분은 0으로 채우기

        // 시작위치를 설정
        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {        // 2차원 배열을 순환하는 또다른 형태임(이중 for문 말고 !!)
            row.forEach((value, x)=>{
                // this.x와 this.y는 shape의 상단 왼쪽 좌표
                // shape안에 있는 블록 좌표에 x,y를 더한다.
                // 보드에서 블록의 좌표는 this.x+x, this.y+y가 됨
                if(value > 0) {
                    this.ctx.fillRect(this.x+x,this.y+y,1,1);
                }
            });
        });
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }

}