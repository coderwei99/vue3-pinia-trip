import dayjs from "dayjs";

export function formatDate(date: Date | string | dayjs.Dayjs) {
  return dayjs(date).format("MM月DD日");
}

export function _nextDate(data: Date) {
  return dayjs(data).add(1, "day");
}

// 计算两个日期的差
export const getDiffDays = (startDay: Date, endDay: Date) => {
  const res = dayjs(endDay).diff(startDay, "day");
  console.log("--", res);

  return res;
};
