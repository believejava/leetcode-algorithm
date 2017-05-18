/**
Description：
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function sortNumber(a,b)
{
    return a - b
}

var twoSum = function(nums, target) {
  var tempArray = [];
  var resultArray = [];
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] < target)
      tempArray.push(nums[i]);
  }
  tempArray.sort(sortNumber);
  var tempArrayLength = tempArray.length-1;
  for(var j = 0; j <= tempArrayLength; j++) {
    for (var k = tempArrayLength; k > 0; k --) {
      if((tempArray[j]+tempArray[k]) < target) {
        break;
      } else if ((tempArray[j]+tempArray[k]) > target) {
        continue;
      } else {
        resultArray.push(nums.indexOf(tempArray[j]));
        resultArray.push(nums.indexOf(tempArray[k]));
        return resultArray;
      }
    }
  }
};


var twoSum = function(nums, target) {
  var numLength = nums.length;
  if(numLength<2)
    return nums;
  var hashT={}; 

  for(var i = 0; i < numLength; i++) {
    if(hashT[target - nums[i]] || hashT[target - nums[i]] === 0) {
        return [hashT[target - nums[i]], i];
    } 
    if(!hashT[nums[i]])  {            
      hashT[nums[i]]=i; 
     }
  }    
};