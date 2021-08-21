// Code your solutions in this file

function writeCards(names, surprise ) {
    let messages = [];

    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
        console.log(messages[i])
    }
    return messages;
}
//writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) <-- this is to call the writeCards function
function countDown(integer) {

    while(integer >= 0){
        console.log(integer--)
        //debugger;
    }
}

countDown(4);