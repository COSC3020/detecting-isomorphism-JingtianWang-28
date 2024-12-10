function are_isomorphic(graph1, graph2) {
    if (graph1.n !== graph2.n) return false;
    if (graph1.edges.length !== graph2.edges.length) return false;

    let adj1 = buildAdjacencyList(graph1);
    let adj2 = buildAdjacencyList(graph2);
    let degrees1 = adj1.map(neighbors => neighbors.length).sort((a, b) => a - b);
    let degrees2 = adj2.map(neighbors => neighbors.length).sort((a, b) => a - b);

    for (let i = 0; i < degrees1.length; i++) {
        if (degrees1[i] !== degrees2[i]) return false;
    }

    let n = graph1.n;
    let used = new Array(n).fill(false); 
    let mapping = new Array(n).fill(-1); 

    return backtrack(0, adj1, adj2, mapping, used);
}

function buildAdjacencyList(graph) {
    const n = graph.n;
    const adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (let [u, v] of graph.edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    for (let i = 0; i < n; i++) {
        adj[i].sort((a, b) => a - b);
    }
    return adj;
}

function backtrack(vertex, adj1, adj2, mapping, used) {
    const n = adj1.length;
    if (vertex === n) {
        return true;
    }

    for (let candidate = 0; candidate < n; candidate++) {
        if (!used[candidate]) {
            if (adj1[vertex].length !== adj2[candidate].length) continue;

            mapping[vertex] = candidate;
            used[candidate] = true;

            if (compatibleSoFar(vertex, adj1, adj2, mapping)) {
                if (backtrack(vertex + 1, adj1, adj2, mapping, used)) {
                    return true;
                }
            }

            mapping[vertex] = -1;
            used[candidate] = false;
        }
    }

    return false;
}

function compatibleSoFar(v, adj1, adj2, mapping) {
    for (let x of adj1[v]) {
        if (mapping[x] !== -1) {
            let vMapped = mapping[v];
            let xMapped = mapping[x];
            if (!isAdjacent(adj2, vMapped, xMapped)) {
                return false;
            }
        }
    }
    return true;
}

function isAdjacent(adj, u, v) {
    let neighbors = adj[u];
    let left = 0;
    let right = neighbors.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (neighbors[mid] === v) return true;
        if (neighbors[mid] < v) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

module.exports = { are_isomorphic };
