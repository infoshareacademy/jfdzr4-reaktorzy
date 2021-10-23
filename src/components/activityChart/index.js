import { NorthWest } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { formatDate } from "../../controllers/get-date/getDate";
import { UserContext } from "../../controllers/user-context";
import { loadUserActivityData } from "../../services";

export const ActivityChart = () => {
  const [userDateProgress, setUserDateProgress] = useState([]);
  const [activityChart, setActivityChart] = useState([]);
  const { isLoggedIn } = useContext(UserContext);
  const userId = isLoggedIn.uid;

  const initialActivityChart = [];
  const numberDayOfWeek = [7, 1, 2, 3, 4, 5, 6];
  const now = new Date();
  const dayOfWeek = numberDayOfWeek[now.getDay()];
  let chartDay = new Date();
  chartDay.getDate();
  for (let day = 0; day < 365; day++) {
    if (day < 7 - dayOfWeek) {
      chartDay.setDate(chartDay.getDate() + (7 - dayOfWeek));
    } else if (day === 7 - dayOfWeek) {
      chartDay = new Date();
    } else {
      chartDay.setDate(chartDay.getDate() - 1);
    }
    let formatedDate = formatDate(chartDay);

    initialActivityChart.push({ date: formatedDate, progress: 0 });
  }

  useEffect(() => {
    const updateChart = activityChart.map((day) => {
      const newProgress = userDateProgress.map((dayUser) => {
        if (dayUser.date === day.date) {
          return dayUser.progress;
        } else return 0;
      });
      day.progress = newProgress[0];
      return day;
    });
    setActivityChart(updateChart);
  }, [userDateProgress]);

  useEffect(() => {
    setActivityChart(initialActivityChart);
    loadUserActivityData(userId)
      .then((r) => r.json())
      .then((data) => {
        const formatArrayData = Object.keys(data).map((key) => ({
          date: key,
          progress: data[key].total,
        }));
        setUserDateProgress(formatArrayData.slice(-365));
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row-reverse wrap-reverse",
        flexDirection: "column-reverse",
        /* alignItems: "end", */
        height: "98px",
        width: "742px",
      }}
    >
      {activityChart.map((box) => {
        return (
          <div
            style={{
              width: "10px",
              height: "10px",
              margin: "1px",
              backgroundColor: `rgb(24, 140, 24, 0.${box.progress})`,
              border: "1px solid black",
              borderRadius: "2px",
            }}
            date={box.date}
          ></div>
        );
      })}
    </div>
  );
};
