// 원하는거 : 최대 던전 수

// 접근 방법
// dfs로 전체 탐색 하여 모든 경우의 수를 돌면서 최대값을 반환한다
// 같은 던전을 재방문 할 수 없게 방문 체크 배열을 사용한다

// 시간 복잡도 : O(N!)

class Solution {
    
    static int answer;
    static int n;
    static boolean[] visited;
    
    private void dfs(int k, int[][] dungeons, int count) {
        answer = Math.max(answer, count);
        
        for (int i = 0; i < n; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], dungeons, count + 1);
                visited[i] = false;
            } 
        }
    }
    
    public int solution(int k, int[][] dungeons) {
        answer = -1;
        n = dungeons.length;
        visited = new boolean[n];

        dfs(k, dungeons, 0);
        
        return answer;
    }
}

