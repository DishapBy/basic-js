export default function createDreamTeam(arrayOfNames){
    let result = [];
    arrayOfNames.forEach(item => {
        if(typeof item === "string"){
            result.push(item[0])
        }
    });

    result.sort((a,b) => {
        return a > b ? 1 : -1;
    })

    return result;
}
