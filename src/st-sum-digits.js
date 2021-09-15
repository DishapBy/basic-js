export default function getSumOfDigits(values) {
    return values.reduce((sum, current) => sum + current, 0)
}