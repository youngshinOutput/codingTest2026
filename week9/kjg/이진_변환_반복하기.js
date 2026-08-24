function solution(s) {
    var answer = [0,0];
    let str = s
    let arr = str.split("")
    
    while(arr.join("")!=="1"){
        
        const onlyOneArray = arr.filter((i)=>{
            return i==="1"
        })
        
        answer[0]++
        
        answer[1] += arr.length - onlyOneArray.length
        
        arr = onlyOneArray.length.toString(2).split("")
        
        
    }
    
    
    return answer;
}
