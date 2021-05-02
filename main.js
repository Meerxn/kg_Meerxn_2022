/**
 * This function outputs the String representation of respective integers given by digit
 * @param {Array} argv - arguments given in the command line to parse
 * @returns - String representation of each digit
 */
 var NumToString = function(argv) {
    var result = [];
    for (let i = 0; i < argv.length; i++) {
        var currString = ""; // String representation for current index
        argv[i] = argv[i].trim();
        // Error handling and edge cases for checking types and negative values
        if (typeof parseInt(argv[i]) !== 'number' || argv[i] < 0) {
            console.log("Error in input. Please enter valid postive numbers");
            return
        }
        let sNumber = args[i];
        for (let j = 0; j < sNumber.length; j++) {
            currString += numbers[sNumber.charAt(j)];
        }
        result.push(currString);


    }
    console.log(result.join(", "));
};

var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var args = process.argv.slice(2);
NumToString(args);