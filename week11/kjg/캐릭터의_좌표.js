// x,y 1사분면 

function solution(keyinput, board) {
    var answer = [];
    // 방향 const 값 배열 생성
    const moveMap = {
        up: [0,1],
        down: [0,-1],
        left: [-1,0],
        right: [1,0]
    }
    
    // 현 위치 let
    let now = [0,0]
    // of keyinput 반복 이동
    for(let currentMove of keyinput){
        let prev = [...now]
        const move = moveMap[currentMove]
     
        prev = [prev[0]+move[0], prev[1]+move[1]]


        const xLimit = Math.floor(board[0]/2)
        const yLimit = Math.floor(board[1]/2)

        if(prev[0] > xLimit || prev[0] < -xLimit) continue;
        if(prev[1] > yLimit || prev[1] < -yLimit) continue;

        now = [...prev]

        console.log(now)

    }
        //단 맵 밖으로 나가지 않도록
    
    // 보드 1이면 0 확정 반환

    if(board[0] === 1){
        now[0] = 0 
    }
    if(board[1] === 1){
        now[1] = 0
    }

    return now;
}
