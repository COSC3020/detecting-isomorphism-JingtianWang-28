const assert = require('assert');
const { are_isomorphic } = require('./code.js');

{
    const graph1 = { n: 3, edges: [[0,1],[1,2],[2,0]] };
    const graph2 = { n: 3, edges: [[0,1],[1,2],[2,0]] };
    assert.strictEqual(are_isomorphic(graph1, graph2), true, "fail");
}

{
    const graph1 = { n: 3, edges: [[0,1],[1,2],[2,0]] };
    const graph2 = { n: 3, edges: [[0,1],[0,2]] };
    assert.strictEqual(are_isomorphic(graph1, graph2), false, "fail");
}

console.log("pass");
