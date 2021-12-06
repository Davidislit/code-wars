export function narcissistic(value: number): boolean {
    return value.toString()
            .split('')
            .map(num => Math.pow(Number(num), value.toString().length))
            .reduce((prevValue, currentValue) => prevValue + currentValue)
        === value;
}
