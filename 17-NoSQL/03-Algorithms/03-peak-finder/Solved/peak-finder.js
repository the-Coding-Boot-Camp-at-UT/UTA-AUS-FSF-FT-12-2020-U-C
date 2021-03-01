// Write a function that takes an array of integers containing exactly one peak. A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

var peakFinder = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[0] > nums[1]) {
    return nums[0];
  }

  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums[nums.length - 1];
  }

  var min = 0;
  var max = nums.length - 1;

  while (min < max) {
    const middle = Math.floor((max - min) / 2) + min;

    if (nums[middle - 1] < nums[middle] && nums[middle] > nums[middle + 1]) {
      return nums[middle];
    }

    if (nums[middle - 1] > nums[middle]) {
      max = middle;
    } else {
      min = middle;
    }
  }
};
