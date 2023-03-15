/*
input the rule object set, new matrix size and return the new matrix 
*/
let width = 20
let height = 10
let final_weight = {}
let current_weight = {}

let result = []

export default function GenerateNew(rules, size) {
    width = size.width
    height = size.height

    for (let obj in rules) {
        final_weight[obj] = rules[obj].weight
        current_weight[obj] = 0
    }
    // console.log(width);
    // console.log(height);

    return result


}


