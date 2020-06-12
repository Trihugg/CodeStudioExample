var myFunctions = {
    subString : (fullString, subString) => {
        return fullString.includes(subString);
    },
    toUpper : (fullString) =>{
        return fullString.toUpperCase();
    }
}
module.exports = myFunctions;