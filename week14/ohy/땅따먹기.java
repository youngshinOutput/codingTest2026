class Solution {
	int solution(int[][] land) {
		int answer = 0;

		int r = land.length;

		for (int i = 1; i < r; i++) {
			for (int j = 0; j < 4; j++) {
				int max = 0;
				for (int k = 0; k < 4; k++) {
					if (j != k) {
						max = Math.max(max, land[i - 1][k]);
					}
				}
				land[i][j] += max;
			}
		}

		for (int i = 0; i < 4; i++) {
			if (answer < land[r - 1][i]) answer = land[r - 1][i];
		}

		return answer;
	}
}
