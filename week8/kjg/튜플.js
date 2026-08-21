// 튜플: 중복가능, 순서가 다르면 다름 : 순열 
// 문자열 배열화 
// 내부 배열은 순서를 보장하지않음
// 

function solution(s) {

    var answer = [];

    // 배열화

    const s2 = s.slice(2,-2)
    const arrOfStr = s2.split("},{")
    const arr = arrOfStr.map( i => i.split(","))

    // 오름차 정렬

    arr.sort((a,b) => a.length - b.length)


    // 배열 순회
    for(let i of arr){
   // 배열간 차집합(fillter includes) 요소 추가
      const rest = i.filter((j => !answer.includes(j)))

      answer.push(...rest)


    }
    

    
    return answer.map(i=>Number(i));
}
