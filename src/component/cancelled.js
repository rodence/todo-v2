import { GlobalTable } from "../shared/globalTable";
////logic and set state

export const CancelledTask = () => {
  const col = ["Task Description", "Status"];
  const rowfilter = ["task_description", "task_status"];
    
  return <GlobalTable column={col} rowfilter={rowfilter}  />
};
