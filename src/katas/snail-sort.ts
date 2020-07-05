export function snailSort(array) {
    const sortedResult = [];
    while(array.length > 0) {
        sortedResult.push(...array.shift());
        for(let i = 0; i < array.length; i++) {
            sortedResult.push(array[i].pop());
        }
        sortedResult.push(...(array.pop() || []).reverse());
        for(let i = array.length-1; i >= 0;i--) {
            sortedResult.push(array[i].pop());
        }
    }
    return sortedResult;
}

export function snailSort2(array) {
    var sortedResult = [];
    while (array.length) {
        sortedResult.push(...array.shift());
        array.map(row => sortedResult.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }
    return sortedResult;
}