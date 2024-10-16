const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
]

//The Graph
const adjacencyList = new Map()

//Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

//Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

//Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

function bfs(start) {

    const queue = [start]
    const visited = new Set()

    while(queue.length > 0) {
        const airport = queue.shift()
        const destinations = adjacencyList.get(airport)
        
        for (const destination of destinations) {
            if (destination === 'BKK') {
                console.log('BKK Found at Airport: ', airport)
            }

            if(!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }

}

// bfs('PHX')


function dfs(start, visited = new Set()) {
    console.log(start)

    visited.add(start)

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        
        if (destination === 'BKK') {
            console.log(`DFS found Bangkok ${visited.size} in steps`)
            return
        }

        if(!visited.has(destination)) {
            dfs(destination, visited)
        }
    }
}

dfs('PHX')