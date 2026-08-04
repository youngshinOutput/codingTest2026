import java.util.*;

class Solution {
    public int[] solution(String s) {
        int transformCount = 0;
        int totalZeroCount = 0; 

        while (!s.equals("1")) {
            int count = 0;
            
            for (int i = 0; i < s.length(); i++) {
                if (s.charAt(i) == '0') count++;
            }
            
            totalZeroCount += count;
            transformCount++;
            
            s = s.replace("0", "");
            s = transformBinary(s.length()); 
        }

        return new int[]{transformCount, totalZeroCount};
    }
    
    private String transformBinary (int len) {
        StringBuilder sb = new StringBuilder();
        
        while(len >= 2) {
            sb.append(String.valueOf(len % 2));
            len /= 2;
        }
        
        sb.append(len);
        
        return sb.reverse().toString();
    }
}
