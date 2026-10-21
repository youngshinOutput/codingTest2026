class Solution {
    public int solution(int[][] triangle) {
        int n = triangle.length;
        int[][] dp = new int[n + 1][n + 1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                dp[i][j] = triangle[i - 1][j - 1] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }

        int answer = 0;
        for (int j = 1; j <= n; j++) {
            answer = Math.max(answer, dp[n][j]);
        }
        return answer;
    }
}
