function SortStones(weights) {
    const graph = {};
    const inDegree = {};
    const stones = new Set();
    for (const [a, b, heavier] of weights) {
        stones.add(a);
        stones.add(b);
        graph[a] = graph[a] || [];
        graph[b] = graph[b] || [];
        inDegree[a] = inDegree[a] || 0;
        inDegree[b] = inDegree[b] || 0;
    }
    for (const [a, b, heavier] of weights) {
        if (heavier) {
            graph[a].push(b); 
            inDegree[b]++;
        } else {
            graph[b].push(a);
            inDegree[a]++;
        }
    }

    const queue = [];
    const sorted = [];

    for (const stone of stones) {
        if (inDegree[stone] === 0) {
            queue.push(stone);
        }
    }

    while (queue.length > 0) {
        const current = queue.shift();
        sorted.push(current);

        for (const neighbor of graph[current] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return sorted;
}
const input = [
    ['A', 'B', true],
    ['C', 'B', false],
    ['A', 'C', true],
    ['D', 'A', false],
    ['B', 'D', true],
    ['D', 'C', true],
];

console.log(SortStones(input)); // ["A", "D", "B", "C"]
