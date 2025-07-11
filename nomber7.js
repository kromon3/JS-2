function SortStonse(weights){
    var stones = new Set()
    var score ={}

    for (var [a , b] of weights){
        stones.add(a);
        stones.add(b);
    }
    stones.forEach(stone => score[stone]=0);

    for (var [a,b,heavier] of weights){
        if (heavier){
            score[a]++;
            score[b]--;
        }
        else {
            score[b]++;
            score[a]--;
        }
    }
    return Array.from(stones).sort((x,y)=> score[y]- score[x]);
}

var input =[
    ['A', 'B', true],
    ['C', 'B', false],
    ['A', 'C', true ],
    ['D', 'A', false],
    ['B', 'D', true],
    ['D', 'C', true],
];


console.log(SortStonse(input));
