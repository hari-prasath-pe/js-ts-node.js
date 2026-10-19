function randomNumberLessThanTen(){
    return Math.floor(Math.random() * 10)
}

/* Export Module using CommonJS -> Single Value Export
=======================================================
-> It's act like variable and store the complete function to the module.exports
-> module.exports (object) will copies the function pointer to a new variable name (imports name)
*/
// module.exports = randomNumberLessThanTen;


/* Export Module using CommonJS type2 -> Property Object or Named Module Properties
=======================================================
-> Here complete object structure is assigned to the module.export
-> module.exports (object) will holds all the function variables as object value for one variable (imports name)
*/ 

const now = new Date();
const dateonly = now.toLocaleDateString("en-IN");
const timeonly = now.toLocaleTimeString("en-IN", {timeStyle: 'short'});
const yearOnly = now.getFullYear();

function getDate(){
    return dateonly
}

function getTime(){
    return timeonly
}

function getYear(){
    return yearOnly
}

module.exports = { randomNumberLessThanTen, getDate, getTime, getYear };