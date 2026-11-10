function solution(d, budget) {
    var answer = 0;



    d.sort((a,b) => a-b)
    let count = 0
    for(let i of d){ // 뺏을떄 0이하가 되면 안됨
        if(budget-i>=0){
            budget = budget-i
            count++
        }else{
            break;
        }
    }
    return count;
}
