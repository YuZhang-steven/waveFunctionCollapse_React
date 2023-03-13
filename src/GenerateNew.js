/*
input the rule object set, new matrix size and return the new matrix 
*/

export default function GenerateNew(rules, size) {
    const width = size.width
    const heigt = size.heigt

    let final_weight = {}
    let current_weight = {}

    for (let obj in rules) {
        final_weight[obj] = rules[obj].weight
        current_weight[obj] = 0
    }
    console.log(final_weight);
    console.log(current_weight);

    return false


}