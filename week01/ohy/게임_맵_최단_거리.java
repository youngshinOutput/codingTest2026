import java.util.*;

class Solution {
    
    static int n, m;

    public void bfs(int a, int b, int[][] maps) {
        int[] dx = {-1, 0, 1, 0}; 
        int[] dy = {0, 1, 0, -1};

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{a, b}); 

        while (!queue.isEmpty()) {
            int[] point = queue.poll();
            int x = point[0];
            int y = point[1];

            for (int i = 0; i < 4; i++) { 
                int nx = x + dx[i];
                int ny = y + dy[i]; 
                
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                
                if (maps[nx][ny] == 1) {
                    maps[nx][ny] = maps[x][y] + 1;
                    queue.offer(new int[]{nx,ny}); 
                }
            }
        }
    }


    public int solution(int[][] maps) {
        n = maps.length;
        m = maps[0].length;
        
        bfs(0, 0, maps);
    
        return maps[n - 1][m - 1] == 1 ? -1 : maps[n - 1][m - 1];
    }
}
