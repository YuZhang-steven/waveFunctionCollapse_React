/*
input the rule object set, new matrix size and return the new matrix 
*/
let width = 20
let height = 10
let final_weight = {}
let current_weight = {}
let collapsed

let result = []
let rules = {}

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

export default function GenerateNew(rules_list, size) {

    width = size.width
    height = size.height
    rules = rules_list
    collapsed = 0

    // console.log(rules)
    /**create and fill out the result array with null */
    for (let i = 0; i < width; i++) {
        result[i] = []
        for (let j = 0; j < height; j++) {
            result[i][j] = -1
        }
    }

    /** initial the current and final weight list */
    for (let obj in rules) {
        final_weight[obj] = rules[obj].weight
        current_weight[obj] = 0
    }
    // console.log(result);
    // console.log(current_weight);

    nextCollapseQueue.push([3, 6])

    while (nextCollapseQueue.length !== 0) {
        reOrderQueue(nextCollapseQueue)
        collapse()
        // console.log(nextCollapseQueue);
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
    let x, y

    [x, y] = nextCollapseQueue[0]
    nextCollapseQueue.shift()

    let curr_loc = result[x][y]

    console.log('curr_loc');
    console.log(x);
    console.log(y);


    // console.log(rules);

    //edge case 1: if current location don't have list(-1)
    //build list
    if (curr_loc === -1) {
        console.log('curr_loc -1');

        result[x][y] = new Set(Object.keys(rules))
    }
    else {
        console.log('curr_loc -100000000000');
        console.log(curr_loc);

    }
    /** 
     * 
     * collapse
     *  
     * */

    result[x][y] = findCollapseResult(result[x][y])
    // console.log(result[x][y]);
    current_weight[result[x][y]] = (current_weight[result[x][y]] * collapsed + 1) / (collapsed + 1)
    collapsed += 1


    /** 
     * 
     * add surounding to the queue 
     * 
     * 
     * */

    // console.log('x' + parseInt(x));
    console.log('collapsed ' + parseInt(collapsed));
    console.log('rule ');
    console.log(result[x][y]);

    console.log(current_weight)

    const block_rule = rules[result[x][y]].rule//bug:blcock sometime is undefine


    // result[0][6] = new Set(['r', 'g'])



    if (result[x - 1]) {
        let cell = result[x - 1][y]
        console.log('cell');
        console.log(cell);
        const block_list = block_rule[0] //current block rule be checked
        if (cell === -1) {
            console.log('case01');
            cell = new Set(block_list) //add corisbond set in the block rule list to the pre_collapsed array
            nextCollapseQueue.push([x - 1, y])//push the array location to the pre collapsed queue
        }
        // console.log(result[x - 1][y]);

        /** if array location is already in the pre collpased condiont(already have possible block set) */
        else if (cell instanceof Set) {
            console.log('case02');


            const delete_list = []
            cell.forEach((value) => {
                if (!(value in block_list)) {
                    delete_list.push(value)
                }
            })
            for (let val in delete_list) {
                cell.delete(val)
            }

        }
        result[x - 1][y] = cell
        console.log('result[x - 1][y]');
        console.log(result[x - 1][y]);
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

function findCollapseResult(blockset) {
    console.log('blockset');
    console.log(blockset);
    let max_gap = 0
    let result

    const sort = (obj) => {
        // console.log(obj);
        if (final_weight[obj] - current_weight[obj] > max_gap) {
            max_gap = final_weight[obj] - current_weight[obj]
            result = obj

        }
    }

    blockset.forEach(sort)

    console.log('closed res');
    console.log(result);
    return result
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


