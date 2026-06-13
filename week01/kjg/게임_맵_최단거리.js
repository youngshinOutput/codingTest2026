// 최단거리
// 출발 0,0
// // 도착 n-1,m-1
// 도달 불가능 -1
// 도달시 최단거리 반환

const q = [];
let Qstart = 0;
let Qend = 0;
function qPush(i) {
    q.push(i);
    Qend++;
}

function qPop() {
    const popItem = q[Qstart];
    Qstart++;
    return popItem;
}

function solution(maps) {
    var answer = 0;

    const m = maps.length; //y
    const n = maps[0].length; //x

    const dy = [1, 0, -1, 0]; //상하
    const dx = [0, 1, 0, -1]; //좌우

    qPush([0, 0, 0]);
    maps[0][0] = 0;
    while (Qstart < Qend) {
        const item = qPop();
        if (item[0] === m - 1 && item[1] === n - 1) {
            return item[2] + 1;
        }
        for (let i in dy) {
            const nextItem = [item[0] + dy[i], item[1] + dx[i], item[2] + 1];
            if (
                nextItem[0] === m ||
                nextItem[0] < 0 ||
                nextItem[1] === n ||
                nextItem[1] < 0 ||
                maps[nextItem[0]][nextItem[1]] === 0
            ) {
                continue;
            }
            qPush(nextItem);
            maps[nextItem[0]][nextItem[1]] = 0;
        }
    }

    return -1;
}
