export default function createDreamTeam(arrayOfNames){
    let result = '';
    arrayOfNames.forEach(item => {
        if(typeof item === "string"){
            result += item[0]
        }
    });
    return result;
}
