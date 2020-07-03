export function duplicateEncode(word: string): string {
    const wordLowerCase: string = word.toLowerCase()
    return [...wordLowerCase].map(char =>
        word.indexOf(char, word.indexOf(char) + 1) === -1 ? '(' : ')'
    ).join('')
}