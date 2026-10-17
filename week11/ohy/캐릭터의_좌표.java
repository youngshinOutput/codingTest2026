class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int boundX = board[0] / 2;
        int boundY = board[1] / 2;

        int x = 0;
        int y = 0;

        for (String command : keyinput) {
            switch (command) {
                case "left":
                    if (x - 1 >= -boundX) x--;
                    break;
                case "right":
                    if (x + 1 <= boundX) x++;
                    break;
                case "up":
                    if (y + 1 <= boundY) y++;
                    break;
                case "down":
                    if (y - 1 >= -boundY) y--;
                    break;
            }
        }

        return new int[]{x, y};
    }
}
