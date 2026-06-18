


function solution(n,computers){
    let count = 0
    const visited = new Array(n).fill(false)

    function dfs(idx){

        visited[idx] = true // 방문처리

        for(let j = 0; j<n ; j++){
            if(computers[idx][j] === 1 && !visited[j]){
                dfs(j)
            }
        }



    }

    for(let i = 0; i<n; i++){
        if(!visited[i]){
            dfs(i)
            count++
        }
    }

    return count


}
