/**
 * This function outputs the String representation of respective integers given by digit
 * @param {Array} argV - arguments given in the command line to parse
 * @returns - String representation of each digit
 */
 var NumToString = function(argV) {
    var result = [];
    // Error handling no inputs
    if(argV.length == 0){
        console.log("Error in input. Please enter atleast one number");
        return;
        }
    for (let i = 0; i < argV.length; i++) {
        var currString = "";
        // Error handling and edge cases for checking types and negative values
        if (isNaN(argV[i]) || argV[i] < 0) {
            console.log("Error in input. Please enter valid postive numbers");
            return;
        }
        let sNumber = argV[i].toString();
        for (let j = 0; j < sNumber.length; j++) {
            currString += numbers[sNumber.charAt(j)];
        }
        result.push(currString);
    }
    console.log(result.join(", "));
};
// Main
var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var args = process.argv.slice(2);
args = args.map(Number);
NumToString(args);