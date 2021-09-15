export default function createDreamTeam(arrayOfNames){
    let result = [];
    arrayOfNames.forEach(item => {
        if(typeof item === "string"){
            result.push(item[0].toUpperCase())
        }
    });

    result.sort((a,b) => {
        if(a > b){
            return 1
        }
        if(a < b){
            return -1
        }
        if(a === b){
            return 0;
        }
    })

    if(result.length === 0){
        return false;
    }
    return result.join('');
}
