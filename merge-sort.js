const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  // const index = Math.floor(arr.length / 2) + (arr.length % 2);
  const index = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, index));
  let arr2 = mergeSort(arr.slice(index));

  return merge(arr1, arr2);
};

const merge = (arr1, arr2) => {
  let result = [];
  let k = 0;
  let j = 0;

  while (k < arr1.length && j < arr2.length) {
    if (arr1[k] < arr2[j]) {
      result.push(arr1[k]);
      k++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (k < arr1.length) {
    result.push(arr1[k]);
    k++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

mergeSort([4, 2, 3, 7, 5, 6]);
mergeSort([3, 2, 4, 1]);
mergeSort([4, 12, 23, 7, 5, 63]);
