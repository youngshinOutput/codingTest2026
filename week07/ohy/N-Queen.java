class Solution {
    
    static int answer;
    static boolean[] colVisisted, leftCrossVisited, rightCrossVisited;
    
    private void dfs(int depth, int n) {
        if (depth == n) {
            answer++;
            return;
        }
        
        
        for (int col = 0; col < n; col++) {
            int left = depth - col + (n - 1);
            int right = depth + col;

            
            if(!colVisisted[col] && !leftCrossVisited[left] && !rightCrossVisited[right]) {
                colVisisted[col] = true;
                leftCrossVisited[left] = true;
                rightCrossVisited[right] = true;
                
                dfs(depth + 1, n);
                
                colVisisted[col] = false;
                leftCrossVisited[left] = false;
                rightCrossVisited[right] = false;
            }
        }
    }
    
    
    public int solution(int n) {
        answer = 0;
        colVisisted = new boolean[n];
        leftCrossVisited = new boolean[n * 2 - 1];
        rightCrossVisited = new boolean[n * 2 - 1];
        
        dfs(0, n);
        
        return answer;
    }
}
