class AvgMinMaxLength {
  static getSum(total, num) {
    return total + Math.round(num);
  }

  static getAverage(array) {
    return array.reduce(AvgMinMaxLength.getSum, 0) / array.length;
  }

  static getMin(array) {
    return Math.min(...array);
  }

  static getMax(array) {
    return Math.max(...array);
  }

  static getLength(array) {
    return array.length;
  }

  static getData(array) {
    const object = {};

    object.average = AvgMinMaxLength.getAverage(array);
    object.min = AvgMinMaxLength.getMin(array);
    object.max = AvgMinMaxLength.getMax(array);
    object.length = AvgMinMaxLength.getLength(array);

    return object;
  }
}
module.exports = AvgMinMaxLength;
