function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    for(let j = i +1; j < array.length; j++) {
      let sum = array[i] + array[j]
      if (sum === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Take the first number and the second number of the array - sum it up and see if equal the target. If not, use the first and third number and then compared. etc. 
  until reach the last number on the second constant, then the first constant need to be the second number. in otherword - should be a nested function
*/

/*
  Add written explanation of your solution here
  expect true when two numbers in the array have a sum that is equal to the target number, expect false when no combination of number in the array sum equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([65, 20, 14, 6, 22], 28));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, 5, 3, 6, 100], 25));
}

module.exports = hasTargetSum;
