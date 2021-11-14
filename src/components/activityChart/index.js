import { NorthWest } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { formatDate } from "../../controllers/get-date/getDate";
import { UserContext } from "../../controllers/user-context";
import { loadUserActivityData } from "../../services";
import {
  ActivityChartContainer,
  ChartContainer,
  DayName,
  MonthAndChartContainer,
  MonthName,
  Paragraph,
} from "./activityChartContainer";

export const ActivityChart = () => {
  const [userDateProgress, setUserDateProgress] = useState([]);

  const { isLoggedIn } = useContext(UserContext);
  const userId = isLoggedIn.uid;

  const initialActivityChart = [];
  const numberDayOfWeek = [7, 1, 2, 3, 4, 5, 6];
  const now = new Date();
  const dayOfWeek = numberDayOfWeek[now.getDay()];
  let monthToDisplay = [];
  const sortedMonth = () => {
    const nameMonthOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const presentMonth = nameMonthOfYear[now.getMonth()];

    const indexPresentMonth = nameMonthOfYear.findIndex(
      (month) => month === presentMonth
    );
    const sortedArray = [];
    for (let i = 0; i < 12; i++) {
      if (i <= indexPresentMonth) {
        sortedArray.push(nameMonthOfYear[indexPresentMonth - i].slice(0, 3));
      } else {
        sortedArray.push(
          nameMonthOfYear[12 - i + indexPresentMonth].slice(0, 3)
        );
      }
    }
    return sortedArray;
  };

  let chartDay = new Date();
  chartDay.getDate();
  for (let day = 0; day < 364; day++) {
    if (day < 7 - dayOfWeek) {
      chartDay = new Date();
      chartDay.setDate(chartDay.getDate() + (7 - dayOfWeek - day));
    } else if (day === 7 - dayOfWeek) {
      chartDay = new Date();
    } else {
      chartDay.setDate(chartDay.getDate() - 1);
    }
    let formatedDate = formatDate(chartDay);

    initialActivityChart.push({ date: formatedDate, progress: 0 });
  }

  const [activityChart, setActivityChart] = useState(initialActivityChart);

  useEffect(() => {
    const updateChart = activityChart.map((day) => {
      userDateProgress.map((dayUser) => {
        if (dayUser.date === day.date) {
          day.progress = dayUser.progress;
        }
      });
      return day;
    });
    setActivityChart(updateChart);
  }, [userDateProgress]);

  useEffect(() => {
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
  monthToDisplay = sortedMonth();
  return (
    <ActivityChartContainer>
      <DayName>
        <Paragraph>Mo</Paragraph>
        <Paragraph>Tu</Paragraph>
        <Paragraph>We</Paragraph>
        <Paragraph>Th</Paragraph>
        <Paragraph>Fr</Paragraph>
        <Paragraph>Sa</Paragraph>
        <Paragraph>Su</Paragraph>
      </DayName>
      <MonthAndChartContainer>
        <MonthName>
          <p style={{ margin: "2px" }}>{monthToDisplay[11]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[10]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[9]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[8]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[7]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[6]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[5]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[4]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[3]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[2]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[1]}</p>
          <p style={{ margin: "2px" }}>{monthToDisplay[0]}</p>
        </MonthName>
        <ChartContainer>
          {activityChart.map((box) => {
            return (
              <div
                key={box.date}
                style={{
                  width: "1.4%",
                  height: "11%",
                  margin: "0.05vw",
                  backgroundColor: `rgb(24, 140, 24, 0.${box.progress})`,
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
                date={box.date}
              ></div>
            );
          })}
        </ChartContainer>
      </MonthAndChartContainer>
    </ActivityChartContainer>
  );
};
