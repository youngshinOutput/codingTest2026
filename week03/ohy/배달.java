import java.util.*;

class Solution {

    static class Node {
        private final int idx;
        private final int cost;

        Node(int idx, int cost) {
            this.idx = idx;
            this.cost = cost;
        }
    }

    public int solution(int N, int[][] road, int K) {
        int answer = 0;

        ArrayList<ArrayList<Node>> graph = new ArrayList<>();
        
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int i = 0; i < road.length; i++) {
            int s = road[i][0];
            int e = road[i][1];
            int c = road[i][2];
            
            graph.get(s).add(new Node(e, c));
            graph.get(e).add(new Node(s, c));
        }
        
        int[] dist = new int[N + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[1] = 0;

        PriorityQueue<Node> pq = new PriorityQueue<>((o1, o2) -> Integer.compare(o1.cost, o2.cost));
        pq.offer(new Node(1, 0));
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            
            if (current.cost > dist[current.idx]) continue;
            
            for (Node next : graph.get(current.idx)) {
                int cost = current.cost + next.cost;
                
                if (cost < dist[next.idx]) {
                    dist[next.idx] = cost;
                    pq.offer(new Node(next.idx, cost));
                }
            }
        }

        for (int i = 1; i <= N; i++) {
            if (dist[i] <= K) answer++;
        }
        return answer;
    }
}
