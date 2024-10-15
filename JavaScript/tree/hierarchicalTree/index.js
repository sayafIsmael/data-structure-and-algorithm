/**
 * Suppose there is some array of objects data with parent id.
 * You have to convert it to a Hierarchical tree and show them in HTML.
*/

const data = [
    {id: 1, value: 'one'},
    {id: 2, value: 'two'},
    {id: 3, value: 'three', parentId: 1},
    {id: 4, value: 'four', parentId: 2},
    {id: 5, value: 'five', parentId: 3},
    {id: 6, value: 'six', parentId: 4},
    {id: 7, value: 'seven', parentId: 5},
]

function buildTree(items){
    let tree = {}
    let itemsMap = {}

    items.forEach(item => {
        itemsMap[item.id] = {...item, children: []}
    });

    items.forEach(item => {
        if(item.parentId){
            const parent = itemsMap[item.parentId]
            if(parent){
                parent.children.push(itemsMap[item.id])
            }
        } else{
            tree[item.id] = itemsMap[item.id]
        }
    });

    return Object.values(tree)
}

console.log(JSON.stringify(buildTree(data)))