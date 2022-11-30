export const getYData = (data) => {
  const result = data.map((yeildData) => {
    let yeildInfo =
      parseFloat(yeildData.bid_yield) + parseFloat(yeildData.offer_yield);
    let avgYeildInfo = yeildInfo / 2;
    let avgYeildInfoWithTwoDecimal = parseFloat(avgYeildInfo.toFixed(2));
    return avgYeildInfoWithTwoDecimal;
  });
  return result;
};

export const getDate = (data) => {
  const result = data.map((yeildData) => {
    return yeildData.settlement_date;
  });
  return result;
}