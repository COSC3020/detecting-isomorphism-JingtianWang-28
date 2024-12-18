# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

///

G1 has n vertices, G2 has n vertices, and mapping G1 to G2 requires n! permutations, with a time complexity of O(n!)

Each mapping attempt needs to check the consistency of the adjacent relationship of the graph, with a time complexity of O(n^2)

The total time complexity is: theta(n!*n^2)
