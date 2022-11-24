export const ConvertDate = (data) => {
  const thaiMonth = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const dateArray = data.split("/");
  let date;
  let month;
  date = dateArray[0];
  month = thaiMonth[dateArray[1] - 1];
  date += " " + month;
  return date;
};
