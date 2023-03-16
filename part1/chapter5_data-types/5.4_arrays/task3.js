function getMaxSubSum(arr) {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumStart += arr[j];
        maxSum = Math.max(maxSum, sumStart);
      }
    }
  
    return maxSum;
  }
