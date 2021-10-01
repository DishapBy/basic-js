export default function getSeason(array){
    if(date === undefined){
        return 'Unable to determine the time of year!'
    }

    else {
        if (date.getMonth() >= 2 && date.getMonth() <= 4) {
            return 'spring'
        }

        if (date.getMonth() >= 5 && date.getMonth() <= 7) {
            return 'summer'
        }

        if (date.getMonth() >= 8 && date.getMonth() <= 10) {
            return 'autumn (fall)'
        }

        if (date.getMonth() <= 11 || date.getMonth() === 12 || date.getMonth() === 0) {
            return 'winter'
        }
    }
}



