// 직선도로 100 코너 500  벽은 못지나감 
// 다익스트라 그대로 쓰면 실패 . 어떤 방향에서 왔는지에 대한 조건 추가
// 기존 2차우너배열 다익스트라가 아닌 3차원 배열 다익스트라 필요 
function solution(board) {
    const N = board.length

    const dist = Array.from({length : N }, ()=> Array.from({length:N}, () => Array(4).fill(Infinity)))
    //상하좌우 
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1] // -> x + , 밑으로 y +
    const queue = []

    dist[0][0][1] = 0
    dist[0][0][3] = 0

    queue.push([0,0,0,1])
    queue.push([0,0,0,3])

    let head = 0 // shift 대용 포인터

    while(head < queue.length){
        const [x,y,cost,dir] = queue[head++]

        if(dist[x][y][dir] < cost) continue

        for(let i = 0; i < 4 ; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]

            if(nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny]===1 ) continue

            const nextCost = cost + (dir === i ? 100 : 600);

            if(nextCost < dist[nx][ny][i]){
                dist[nx][ny][i] = nextCost;
                queue.push([nx,ny,nextCost,i]);
            }

        }

    }

    return Math.min(...dist[N-1][N-1]);


}
