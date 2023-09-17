function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
  const initialArray = [1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
  const arrayWithoutDuplicates = removeDuplicates(initialArray);
  
  console.log(arrayWithoutDuplicates);
  