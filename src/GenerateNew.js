/*
input the rule object set, new matrix size and return the new matrix 
*/
let width = 20
let height = 10
let final_weight = {}
let current_weight = {}

let result = []

let nextCollapseQueue = []


let testlist = [

    {
        loc: [1, 5],
        avaliableBlocks: ['b', 'r']
    },
    {
        loc: [2, 3],
        avaliableBlocks: ['b', 'r', 'g']
    },
    {
        loc: [2, 1],
        avaliableBlocks: ['b', 'r', 'd', 'f']
    },
    {
        loc: [1, 4],
        avaliableBlocks: ['b', 'r']
    }, {
        loc: [2, 5],
        avaliableBlocks: ['r']
    },


]

export default function GenerateNew(rules, size) {
    width = size.width
    height = size.height

    /**create and fill out the result array with null */
    for (let i = 0; i < width; i++) {
        result[i] = []
        for (let j = 0; j < height; j++) {
            result[i][j] = null
        }
    }

    /** initial the current and final weight list */
    for (let obj in rules) {
        final_weight[obj] = rules[obj].weight
        current_weight[obj] = 0
    }
    console.log(result);
    console.log(current_weight);

    while (nextCollapseQueue.length !== 0) {
        reOrderQueue(nextCollapseQueue)
        collapse()
    }

    return result

}

/** collapse function
 * take the fist element location on the queue list and collapse,
 * check surrounding location.
 * if the location is null, check if it has block list, 
 * if so edit block list, 
 * if not, create block list and edit it
 */
function collapse() {
    const curr_loc = nextCollapseQueue[0]
    let curr_list = result[curr_loc[0]][curr_loc[1]]

    /** collapse */
    curr_list = sortBlocks(curr_list)
    result[curr_loc[0]][curr_loc[1]] = curr_list[0]

    /** add surounding to the queue */
    if (result[x - 1]) {

    }





}

/**
 * 
 * sort the possible block list based on the differnce bwteen current and final weight
 * take an array
 * 
 * return the sorted arr
 * 
 *
 */
function sortBlocks(arr) {
    const sortRule = (a, b) => {
        return (final_weight[a] - current_weight[a]) - (final_weight[b] - current_weight[b])
    }

    return arr.sort(sortRule)
}

/**
 * 
 * @param {Array} arr 
 * @returns sorted Array
 * 
 * sort the current queue list
 * will be called before every collapse
 */
function reOrderQueue(arr) {
    const sortRule = (a, b) => {
        const blockslist_a = result[a.loc[0]][a.loc[1]]
        const blockslist_b = result[b.loc[0]][b.loc[1]]
        if (blockslist_a !== blockslist_b) {
            return blockslist_a - blockslist_b
        }
        else {
            if (a.loc[0] != b.loc[0]) {
                return a.loc[0] - b.loc[0]
            }
            else {
                return a.loc[1] - b.loc[1]
            }
        }
    }

    return arr.sort(sortRule)

}


