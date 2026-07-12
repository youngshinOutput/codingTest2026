import java.util.*;

class Solution {

    static int n;
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {1, 0, -1, 0};
    static int[][][] cost;
    static PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.cost, b.cost));
    
    static final int INF = Integer.MAX_VALUE;
    static final int STRAIGHT = 100;
    static final int CONER = 500;
    static final int RIGHT = 0;
    static final int DOWN = 1;
    static final int LEFT = 2;
    static final int UP = 3;
    
    static class Node {
        int x;
        int y;
        int dir;
        int cost;
        
        public Node(int x, int y, int dir, int cost) {
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.cost = cost;
        }
    }

    
    private void dijkstra(int[][] board) {
        if (board[0][1] == 0) {
            pq.offer(new Node(0, 1, RIGHT, STRAIGHT));
            cost[0][1][RIGHT] = STRAIGHT;
        }
        
        if (board[1][0] == 0) {
            pq.offer(new Node(1, 0, DOWN, STRAIGHT));
            cost[1][0][DOWN] = STRAIGHT;
        }
        
        while(!pq.isEmpty()) {
            Node cur = pq.poll();
            
            if (cur.cost > cost[cur.x][cur.y][cur.dir]) continue;
    
            for (int i = 0; i < 4; i++) {
                int nx = cur.x + dx[i];
                int ny = cur.y + dy[i];
                
                
                if (0 > nx || 0 > ny || nx >= n || ny >= n) continue;
                
                int newCost;
                
                if (board[nx][ny] == 0) {
                    if (cur.dir == i) {
                        newCost = cur.cost + STRAIGHT;
                    } else {
                        newCost = cur.cost + (STRAIGHT + CONER);
                    }
                    
                    if (newCost < cost[nx][ny][i]) {
                        cost[nx][ny][i] = newCost;
                        pq.offer(new Node(nx,ny,i,newCost));
                    }
                }
            }
        }
    }
    
    public int solution(int[][] board) {
        int answer = INF;
        n = board.length;
        
        cost = new int[n][n][4];
        
        for (int i = 0; i< n; i++) {
            for (int j = 0; j< n; j++) {
                Arrays.fill(cost[i][j], INF);
            }
        }
        
        dijkstra(board);
        
        for (int dir = 0; dir < 4; dir++) {
            answer = Math.min(answer, cost[n - 1][n - 1][dir]);
        }
        return answer;
    }
}

    
    
