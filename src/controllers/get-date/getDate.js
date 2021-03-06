export const getCurrentDate = (separator = "_") => {
  let newDate = new Date();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let date, month;

  if (date_raw < 10) {
    date = "0" + date_raw.toString();
  } else {
    date = date_raw.toString();
  }
  if (month_raw < 10) {
    month = "0" + month_raw.toString();
  } else {
    month = month_raw.toString();
  }

  return `${year}${separator}${month}${separator}${date}`;
};

export const getCurrentDateFistDay = (separator = "_") => {
  let newDate = new Date();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let date, month;

  if (date_raw < 10) {
    date = "0" + date_raw.toString();
  } else {
    date = date_raw.toString();
  }
  if (month_raw < 10) {
    month = "0" + month_raw.toString();
  } else {
    month = month_raw.toString();
  }
  return `${date}${separator}${month}${separator}${year}`;
};

export const formatDate = (dateToFormat, separator = "_") => {
  let date_raw = dateToFormat.getDate();
  let month_raw = dateToFormat.getMonth() + 1;
  let year = dateToFormat.getFullYear();
  let date, month;

  if (date_raw < 10) {
    date = "0" + date_raw.toString();
  } else {
    date = date_raw.toString();
  }
  if (month_raw < 10) {
    month = "0" + month_raw.toString();
  } else {
    month = month_raw.toString();
  }

  return `${year}${separator}${month}${separator}${date}`;
};
