module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length == 0) return [];
  if (matrix.length > 0) {
      const flatArr = [];
      matrix.forEach((subArr, index) => {
          if (index % 2 !== 0) {
              flatArr.push(subArr.reverse());
          } else {
              flatArr.push(subArr);
          }
      });
      return flatArr.flat();
  }
};
