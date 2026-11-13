function solution(k, tangerine) {

  // 서로 다른 종류를 최소화 
  // 서로 다른 종류 수의 최솟값

  var answer = 0;


  let t = tangerine

  const m = new Map()

  for(let i of t){
    if(m.has(i) === false){
    m.set(i,1)
    }else{
         m.set(i,m.get(i)+1)
    }
  }
  
  const sortedT = [...m]

  sortedT.sort((a,b)=> b[1] - a[1])

  // console.log(sortedT)

  for(let i of sortedT){

    
  
    k -= i[1]
    answer++

    if(k<=0){
      return answer
    }

  }


    return answer;
}
