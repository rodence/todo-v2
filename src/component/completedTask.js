import { useEffect, useState } from "react";
import { GlobalTable } from "../shared/globalTable";
import { GetRoutes } from "../routes/globalApi";

export const CompletedTask = () => {
  const [completedTask, setCompleteTask] = useState([]);
  useEffect(() => {
    handleCompleteTaskFilter();
  }, []);
  const col = ["Task Description", "Status"];
  const rowfilter = ["todoDesc", "todoStatus"];

  const handleCompleteTaskFilter = async () => {
    await GetRoutes(`http://192.168.1.50:3001/api/v2/todo/`)
      .then(({ data, status }) => {
        if (status === 200) {
          const completeDataFiltered = data.data
            .filter((task) => task.todoStatus === 1)
            .map((task) => ({
              ...task,
              todoStatus: "completed",
            }));
            console.log(completeDataFiltered)
          setCompleteTask(completeDataFiltered);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <GlobalTable column={col} rowfilter={rowfilter} rows={completedTask} />
  );
};
