import { useEffect, useState } from "react";
import { GlobalTable } from "../shared/globalTable";
import { GetRoutes } from "../routes/globalApi";

export const OngoingTask = () => {
  const [ongoingTask, setOngoingTask] = useState([]);
  useEffect(() => {
    handleOngoingTaskFilter();
  }, []);

  const col = ["Task Description", "Status"];
  const rowfilter = ["todoDesc", "todoStatus"];

  const handleOngoingTaskFilter = async () => {
    await GetRoutes(`http://192.168.1.50:3001/api/v2/todo/`)
      .then(({ data, status }) => {
        if (status === 200) {
          const completeFilteredData = data.data
            .filter((task) => task?.todoStatus === 0)
            .map((task) => ({
              ...task,
              todoStatus: "ongoing",
            }));
          setOngoingTask(completeFilteredData);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return <GlobalTable column={col} rowfilter={rowfilter} rows={ongoingTask} />;
};
