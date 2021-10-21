import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../controllers/user-context";
import { loadUserActivityData } from "../../services";

export const ActivityChart = () => {
  const [userDateProgress, setUserDateProgress] = useState({});
  const { isLoggedIn } = useContext(UserContext);
  const userId = isLoggedIn.uid;

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

  return <div></div>;
};
