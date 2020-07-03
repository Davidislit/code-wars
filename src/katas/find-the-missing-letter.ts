export function findMissingLetter(array: string[]): string {
    let result = ""
    let prevLetter: number = 0;
    array.map(letter => letter.charCodeAt(0)).forEach(num => {
        if (num - prevLetter !== 1 && prevLetter !== 0) {
            result = String.fromCharCode(prevLetter + 1);
        } else {
            prevLetter = num;
        }
    });
    return result;
}