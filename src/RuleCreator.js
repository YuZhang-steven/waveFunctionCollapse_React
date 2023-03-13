function findNeighbor(arr, matrix, loc) {
    const x = loc['i']
    const y = loc['j']

    if (matrix[x - 1]) {
        arr[0].add(matrix[x - 1][y])
    }
    if (matrix[x + 1]) {
        arr[3].add(matrix[x + 1][y])
    }
    if (matrix[x][y - 1]) {
        arr[2].add(matrix[x][y - 1])
    }
    if (matrix[x][y + 1]) {
        arr[2].add(matrix[x][y + 1])
    }
    // console.log(x + y);

}

export default function RuleCreator(matrix) {

    const blocks = {}
    let total_blocks = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let key = matrix[i][j]

            if (key in blocks) {
                blocks[key].count += 1
                total_blocks += 1

            }
            else {
                total_blocks += 1
                blocks[key] = {
                    'count': 1,
                    'rule': [new Set(), new Set(), new Set(), new Set()],
                    'weight': 0
                }

            }

            findNeighbor(blocks[key].rule, matrix, { i, j })

        }
    }

    for (let obj in blocks) {


        blocks[obj].weight = blocks[obj].count / total_blocks
    }






    return blocks
}