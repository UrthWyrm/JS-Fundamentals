// Given a number of US cents, return the optimal configuration 
// (meaning the largest denominations possible) of coins in an object. 
// Use dollars, quarters, dimes, nickels, and pennies.

function coinChange(cents) {
    let dollars = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    pennies = cents % 100;
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/10;
    temp = pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;
    console.log("Dollars: " + dollars);
    console.log("Quarters: " +quarters);
    console.log("Dimes: " + dimes);
    console.log("Nickels: " + nickels);
    console.log("Pennies: " + pennnies);
}

