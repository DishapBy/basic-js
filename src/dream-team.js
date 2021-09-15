export default function createDreamTeam(arrayOfNames){
    let result = '';
    arrayOfNames.forEach(item => result += item[0]);
    return result;
}
