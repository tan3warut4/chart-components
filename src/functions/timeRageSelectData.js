export const TimeRangeSelectData = (range, data) => {
  if (range === "oneWeek") {
    let result = [];
    for (let i = 0; i < 7; i++) {
      result.push(data[i]);
    }

    return result;
  }
  if (range === "oneMonth") {
    let result = [];
    for (let i = 0; i < 30; i++) {
      result.push(data[i]);
    }

    return result;
  }
  if (range === "threeMonth") {
    let result = [];
    for (let i = 0; i < 90; i++) {
      result.push(data[i]);
    }

    return result;
  }
};
