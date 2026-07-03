function solution(N, road, K) {
    
    const dist = Array(N+1).fill(Infinity) // 출발지로부터 거리
    const visited = Array(N+1).fill(false) //방문
    const graph = Array.from({length: N+1},()=> Array(N+1).fill(Infinity)) //각 정점간 거리


    //graph 채우기
    for(const [a,b,time] of road){ // graph세팅 및 두 정점간 복수개 간선 최소간선값으로 단일화
        if(time < graph[a][b]){
            graph[a][b] = time
            graph[b][a] = time
        }
    }

    dist[1] = 0 // 시작점 1 거리 0 / 확정값 

    for(let i = 0; i<N; i++){
        let minNode = 0
        let minTime = Infinity

        for(let j = 1;j < N+1; j++){
            if(!visited[j] && dist[j] < minTime){ // 방문하지않은 min확정값인가
                minTime = dist[j];
                minNode = j
            }
        } 
        // 방문하지않은 확정값중 최소확정값 확정됨

        if(minNode === 0) break;

        // 방문하지않은 최소확정값 노드 방문처리
        visited[minNode] = true

        for(let next = 1; next < N+1; next++){
            if(graph[minNode][next] !== Infinity){ // 방문처리된것과 이어진 정점
                const newDist = dist[minNode] + graph[minNode][next]
                if(newDist < dist[next]){// 신규 간선값이 더 작으면 업데이트
                    dist[next] = newDist
                }
            }
        }


    }
    return dist.filter(d => d <= K).length;
}
