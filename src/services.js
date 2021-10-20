import { DATABASE_URL } from "./firebase-config";

export const loadDateActivity = (DATABASE_URL, currentDate) => {
  return fetch(`${DATABASE_URL}/users/id1/${currentDate}.json`);
};

export const sendDataActivity = (DATABASE_URL, currentDate, dateActivity) => {
  return fetch(`${DATABASE_URL}/users/id1/${currentDate}.json`, {
    method: "PUT",
    body: JSON.stringify(dateActivity),
  });
};

export const loadUserActivityData = () => {
  return fetch(`${DATABASE_URL}/users/id1.json`);
};

export const loadUserActivityCurrentDate = (date) => {
  return fetch(`${DATABASE_URL}/users/id1/${date}.json`)
    .then((r) => r.json())
    .then((data) => {
      if (data) {
        return data;
      }
      return undefined;
    });
};

export const totalCount = (row) => {
  const progressLevel = Object.values(row).filter(
    (value) => typeof value === "boolean" && value === true
  );
  return progressLevel.length;
};
