import { useEffect, useState } from "react";
import { GlobalTable } from "../shared/globalTable";
import { GetRoutes } from "../routes/globalApi";
////logic and set state

export const CancelledTask = () => {
  const [cancelledTask, setCancelledTask] = useState([]);
  useEffect(() => {
    handleCancelledTaskFilter();
  }, []);
  const col = ["Task Description", "Status"];
  const rowfilter = ["todoDesc", "todoStatus"];

  const handleCancelledTaskFilter = async () => {
    await GetRoutes(`http://192.168.1.50:3001/api/v2/todo/`)
      .then(({ data, status }) => {
        if (status === 200) {
          const filteredData = data.data
            .filter((task) => task?.todoStatus === 2)
            .map((task) => ({
              ...task,
              todoStatus: "cancelled",
            }));
            console.log(filteredData)
          setCancelledTask(filteredData);
        }

      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <GlobalTable column={col} rowfilter={rowfilter} rows={cancelledTask} />
  );
};
