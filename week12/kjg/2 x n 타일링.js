
// 세로 2 , 가로 7 
// 타일 : 가로 2 세로 1
// 방법의 수 -> dp

// 최종 가짓수 = 이전 가짓수의 합 = 이전가짓수 가로로 2개 혹은 새로로 1개


function solution(n) {
    var answer = 0;
    // 배열 생성
    const dp = Array(n+1).fill(0)

    // 초기값 설정

    dp[1] = 1
    dp[2] = 2

    //점화식

    for(let i = 3 ; i <= n ; i++){
        dp[i] = (dp[i-1] + dp[i-2] ) %1000000007
    }
    
    // 마지막 항 반환
    return dp[n];
}
