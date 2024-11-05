// 여기는 게임에 사용될 상수값을 저장할 공간 !
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

// 상수의 집합을 정의하기 위하여 열거형(enumeration)을 사용
const KEY = {
    LEFT : 37,
    RIGHT : 39,
    DOWN : 40,
    SPACE: 32
}
Object.freeze(KEY);     
    // const를 사용해도 실제로 객체나 배열을 불변하게 만들어주지 않음. 
    // 따라서 Object.freeze()를 사용하여 불변하게 사용.
    // (단, 객체 안에 또 다른 객체가 있으면 하위의 객체는 불변하게 만들 수 없다.)