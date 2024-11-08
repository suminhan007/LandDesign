export function mapToNewRange(arr, min, max) {
    // 映射函数
    const mapValue = (value, oldMin, oldMax, newMin, newMax) => {
      return (
        ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin
      );
    };

    // 将原数组中的每个元素映射到新的范围内
    const newArr = arr.map((value) => mapValue(value, min, max, 0, 1));

    return newArr;
  }