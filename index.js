// Code your solutions in this file

function writeCards(names, event) {
    let array = [];
    for (let i = 0; i < 3; i++ )
    {
        
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        console.log(message);
        array.push(message);
        
    }
    names = array;
    return names;
}

function countDown(num) {
    while (num != -1) {
        console.log(num);
        num--;
    }
}