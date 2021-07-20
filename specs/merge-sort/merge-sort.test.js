/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if(nums.length === 1) return nums;
  const halfway = Math.round(nums.length / 2)
  // const remaining = nums.length - halfway

  const leftA = nums.slice(0, halfway)
  const rightA = nums.slice(halfway, nums.length)

  // const left = mergeSort(leftA);
  // console.log(left)
  // const right = mergeSort(rightA);
  // console.log(right)
  return merge(mergeSort(leftA), mergeSort(rightA))
};

function merge(...arrs) {
  if(arrs.length <= 1) return arrs[0];
  let arr1Cpy = arrs[0].slice()
  let arr2Cpy = arrs[1].slice()
  const arr = []

  while(arr1Cpy.length && arr2Cpy.length) {
    if(arr1Cpy[0] > arr2Cpy[0]) {
      arr.push(arr2Cpy.shift())
    }
    if(arr1Cpy[0] < arr2Cpy[0]) {
      arr.push(arr1Cpy.shift())
    }
  }
  // console.log(arr.concat(arr1Cpy, arr2Cpy))
  return arr.concat(arr1Cpy, arr2Cpy)
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
