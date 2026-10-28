function solution(triangle) {


    const len = triangle.length

    const tri = triangle

    for(let i = len-2; i>=0 ; i--){
        for(let j = 0; j < tri[i].length; j++){
            const current = tri[i][j]
            let newVar = current
            newVar +=  Math.max(tri[i+1][j],tri[i+1][j+1])
            tri[i][j] = newVar
        }
    }



    return tri[0][0];
}
