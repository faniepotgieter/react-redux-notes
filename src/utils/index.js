import dayjs from "dayjs";

// use dayjs to get a short date that looks like one of these:
// 5 PM  --> for today
// Thu   --> for another day this week
// 1 Jul --> for more than 7 days ago
export const getShortDate = jsdate => {
  let date = dayjs(jsdate);
  let now = dayjs();
  let diff = now.diff(date, "days");
  let formatString = "D MMM h A";

  if (now.day() !== date.day()) {
    if (diff >= 1 && diff <= 7) {
      formatString = "ddd";
    } else if (diff > 7) {
      formatString = "D MMM";
    } else {
      formatString = "h:mm A";
    }
  } else {
    formatString = "h:mm A";
  }

  return date.format(formatString);
};

// use dayjs to get a long date like this:
// 20 July 2018 at 17:03 PM
export const getLongDate = jsdate => {
  let date = dayjs(jsdate);

  let formatString = "D MMMM YYYY [at] H:mm A";

  return date.format(formatString);
};
