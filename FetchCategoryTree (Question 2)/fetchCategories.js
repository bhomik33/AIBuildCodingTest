const categoriesArray = require('./categories.js');

// root node
const root = {
    categoryId: "root",
    name: "Root Category",
    parent: null,
    children: []
}

// Total time complexity -> O(n)
function arrayToTree(arr, root) {
    var hashmap = {};

    // O(n) time complexity
    for (let i = 0; i < arr.length; i++) {
        arr[i].children = [];
        hashmap[arr[i].categoryId] = arr[i];
    }
    // O(n) time complexity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent == "root") {
            root.children.push(arr[i]);
        } else {
            hashmap[arr[i].parent].children.push(arr[i]);
        }
    }

    return root;
}


const categoriesTree = arrayToTree(categoriesArray, root);


module.exports = categoriesTree;