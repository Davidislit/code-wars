export function scramble(str1, str2) {
    let letterCount = [...new Array(256)].map(x => 0);

    str2.split('').forEach(letter => letterCount[letter.charCodeAt(0)]++);
    str1.split('').forEach(letter => letterCount[letter.charCodeAt(0)]--);

    letterCount = letterCount.filter(x => x > 0);

    return letterCount.length == 0;
}
