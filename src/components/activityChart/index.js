import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { formatDate } from "../../controllers/get-date/getDate";
import { UserContext } from "../../controllers/user-context";
import { loadUserActivityData } from "../../services";

export const ActivityChart = () => {
  const [userDateProgress, setUserDateProgress] = useState({});
  const [activityChart, setActivityChart] = useState([]);
  const { isLoggedIn } = useContext(UserContext);
  const userId = isLoggedIn.uid;

  const initialActivityChart = [];
  let chartDay = new Date();
  for (let day = 365; day > 0; day--) {
    if (day < 365) {
      chartDay.setDate(chartDay.getDate() - 1);
    }
    let formatedDate = formatDate(chartDay);
    initialActivityChart.push({ date: formatedDate, dayActivityPoints: 100 });
  }
  setActivityChart(initialActivityChart);

  useEffect(() => {
    loadUserActivityData(userId)
      .then((r) => r.json())
      .then((data) => {
        const formatArrayData = Object.keys(data).map((key) => ({
          date: key,
          progress: data[key].total,
        }));
        setUserDateProgress(formatArrayData.slice(-31));
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "row",
        height: "98px",
        width: "245px",
      }}
    >
      {activityChart.map((box) => {
        <div
          style={{
            width: "10px",
            height: "10px",
            margin: "1px",
            border: "1px solid rgb(0,0,0,0.5)",
            borderRadius: "2px",
          }}
          date={box.date}
          alpha={box.dayActivityPoints}
        ></div>;
      })}
    </div>
  );
};
