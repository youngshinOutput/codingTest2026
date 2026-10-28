function solution(land) {
    var answer = 0;

    

    const n = land.length

    for(let i = 1;i<n; i++){
        for(let j = 0; j<4;j++){
            land[i][j] += Math.max(...land[i-1].filter((a,i) => i!==j))
        }
    }

    

    return Math.max(...land[n-1]);
}
