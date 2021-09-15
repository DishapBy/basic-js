export default function countCats(backyard){
    let number = 0;

    backyard.forEach(item => {
        item.forEach(i => {
            if(i === '^^'){
                number += 1;
            }
        })
    })
    
    return number;
}

