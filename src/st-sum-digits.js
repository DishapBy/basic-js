export default function getSumOfDigits(numbers) {
    let a = numbers.toString();
    let result = 0;
    a = [...a]

    result = a.reduce((sum, current) => {
        return Number(sum) + Number(current)
    }, 0)

    while (result >= 10){
        let tmp = result.toString();
        tmp = [...tmp];

        result = tmp.reduce((sum, current) => {
            return Number(sum) + Number(current)
        }, 0)

    }

    return result;
}