// 노란, 갈색테두리 격자 갯수 기억, 크기 무기억
// 가로 세로 크기 리턴 
// 가로가 같거나 더 김
// (w-2) * (h-2) = 노란색 갯수
// 노란색 갯수의 약수 2개를 각각 2를 더한 값 = 가로 세로 크기 


function solution(brown, yellow) {
    var answer = [];

    let all = brown + yellow
    let h = 3
    let w = all/3

    //1 나머지가 정수일것
    // -2 하고 곱한게 옐로일것

    while(w >= h){
        if(all%h !== 0 || (w-2) * (h-2) !== yellow){
            h++
            w=all/h
            continue;
        }
        answer.push(w)
        answer.push(h)
        break;
    }

    return answer;
}
