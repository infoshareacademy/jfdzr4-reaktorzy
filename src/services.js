import { DATABASE_URL } from "./firebase-config";

export const loadDateActivity = (DATABASE_URL, currentDate, userId) => {
  return fetch(`${DATABASE_URL}/users/${userId}/${currentDate}.json`);
};

export const sendDataActivity = (
  DATABASE_URL,
  currentDate,
  dateActivity,
  userId
) => {
  return fetch(`${DATABASE_URL}/users/${userId}/${currentDate}.json`, {
    method: "PUT",
    body: JSON.stringify(dateActivity),
  });
};

export const loadUserActivityData = (userId) => {
  return fetch(`${DATABASE_URL}/users/${userId}.json`);
};

export const loadUserActivityCurrentDate = (date, userId) => {
  return fetch(`${DATABASE_URL}/users/${userId}/${date}.json`)
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

export const loadUserScore = (DATABASE_URL, userId) => {
  return fetch(`${DATABASE_URL}/users/${userId}.json`);
};

export const sendUserScore = (DATABASE_URL, userId, score) => {
  return fetch(`${DATABASE_URL}/usersScore/${userId}.json`, {
    method: "PUT",
    body: JSON.stringify({ score }),
  });
};
