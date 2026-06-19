import java.util.*;

class Solution {
    static boolean[] visited;

    private void dfs(int node, int[][] computers) {
        visited[node] = true;

        for (int i = 0; i < computers[node].length; i++) {
            if (!visited[i] && computers[node][i] == 1) {
                dfs(i, computers);
            }
        }
    }
    
    private void bfs(int node, int[][] computers) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(node);
        
        while(!q.isEmpty()) {
            int cur = q.poll();
            visited[cur] = true;
            
            for (int i = 0; i < computers[cur].length; i++) {
                if (!visited[i] && computers[cur][i] == 1) {
                    q.offer(i);
                }
            }
        }
    }

    public int solution(int n, int[][] computers) {
        int answer = 0;
        visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                bfs(i, computers);
                answer++;
            }
        }

        return answer;
    }
}
