function solution(k, dungeons) {
    let maxCount = 0;
    const visited = Array(dungeons.length).fill(false);

    function dfs(currentK, count) {
        maxCount = Math.max(maxCount, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, consumeFatigue] = dungeons[i];

            if (!visited[i] && currentK >= minFatigue) {
                visited[i] = true;
                dfs(currentK - consumeFatigue, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);

    return maxCount;
}
