function solution(n) {
    let answer = 0;
    const cols = Array(n).fill(0);

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (cols[i] === col) return false;
            if (Math.abs(row - i) === Math.abs(col - cols[i])) return false;
        }
        return true;
    }

    function dfs(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                cols[row] = col;
                dfs(row + 1);
            }
        }
    }

    dfs(0);
    return answer;
}
