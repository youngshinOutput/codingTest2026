import java.util.*;

class Solution {
    
    static final String separator = "\\},\\{";
    
    public int[] solution(String s) {
        
        s = s.replace("{{", "").replace("}}", "");
        
        String[] sets = s.split(separator);
        
        int[] answer = new int[sets.length];
        
        Arrays.sort(sets, (a, b) -> {
            return a.split(",").length - b.split(",").length;
        });
        
        Set<Integer> usedNumbers = new HashSet<>();
            
        for (int idx = 0; idx < sets.length; idx++) {
            for (String numString : sets[idx].split(",")) {
                int num = Integer.parseInt(numString);

                if (usedNumbers.contains(num)) continue;

                answer[idx] = num;
                usedNumbers.add(num);
            }
        }

        return answer;
    }
}
