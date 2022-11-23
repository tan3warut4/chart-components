export const getDate = async (data) => {
  let dateData = [];
  let reverseDateData = [];
  await data.data.map((yeildData) => {
    dateData.push(yeildData.settlement_date);
  });
  reverseDateData = dateData.reverse();
  return reverseDateData;
 
};

export const getYdata = (data) => {
  let YData = [];
  data.data.map((yeildData) => {
    let yeildInfo =
      parseFloat(yeildData.bid_yield) + parseFloat(yeildData.offer_yield);
    let avgYeildInfo = yeildInfo / 2;
    YData.push(avgYeildInfo);
  });
  console.log(typeof YData)
  return YData;
};
